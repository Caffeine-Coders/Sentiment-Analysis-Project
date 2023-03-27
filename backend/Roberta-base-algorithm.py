import pandas as pd
from transformers import RobertaTokenizerFast, TFRobertaForSequenceClassification, TFTrainer, TFTrainingArguments
import tensorflow as tf
from sklearn.model_selection import train_test_split
import numpy as np

data = pd.read_csv('TweetsData.csv')
data["text"].fillna("random", inplace=True)
data["sentiment"] = data["sentiment"].replace("positive",2)
data["sentiment"] = data["sentiment"].replace("neutral",1)
data["sentiment"] = data["sentiment"].replace("negative",0)
print(data)

# tweets = list(data["text"])
# classifiers = list(data["sentiment"])
tweets = data["text"].values.tolist()
classifiers = data["sentiment"].values.tolist()

tokenizer = RobertaTokenizerFast.from_pretrained("roberta-base", num_labels=3)
print("------------------train and test splits --------------------------")
X_train, X_test, Y_train, Y_test = train_test_split(tweets, classifiers, test_size=0.1, random_state=0)

#
print("-------------------tokenizing------------------------------")
train_encodings = tokenizer(X_train, truncation=True, padding=True)
test_encodings = tokenizer(X_test, truncation=True, padding=True)

# print(train_encodings)
#
print("converting into datasets")
train_dataset = tf.data.Dataset.from_tensor_slices((dict(train_encodings), Y_train))
test_dataset = tf.data.Dataset.from_tensor_slices((dict(test_encodings), Y_test))

training_args = TFTrainingArguments(
    output_dir='./results',
    num_train_epochs=1,
    per_device_train_batch_size=8,
    per_device_eval_batch_size=16,
    save_total_limit=5,
    eval_steps=0,  # set eval_steps to 0
    logging_steps=10,
    learning_rate=2e-5,
    warmup_steps=100,
    weight_decay=0.01,
    push_to_hub=False,
    logging_dir='./logs',
 )

print("training the model")
with training_args.strategy.scope():
    model = TFRobertaForSequenceClassification.from_pretrained("roberta-base", num_labels=3)

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy')

trainer = TFTrainer(
            model = model,
            args=training_args,
            train_dataset=train_dataset
)
# print(trainer)
trainer.train()

# print(trainer.evaluate(test_dataset))
# print(test_dataset)
# print(trainer.predict(test_dataset))
