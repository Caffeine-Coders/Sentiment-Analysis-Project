from transformers import AutoTokenizer, AutoModelForSequenceClassification, AutoModelForSeq2SeqLM
from transformers import TFAutoModelForSequenceClassification

tokenizer = AutoTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-sentiment-latest")
model = AutoModelForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-sentiment-latest")

text = "Legacy like Sachin,Fan following like No other,Captaincy like Ponting,Power like Gayle,Cool like Williamson,Keeper like Gilchrist,Longetivity like Anderson,Ability like Kohli &amp;An Aroma and Charisma like no other"

inputs = tokenizer(text, return_tensors="pt")
outputs = model(**inputs)

label_id = outputs.logits.argmax().item()
label = model.config.id2label[label_id]

print(label)

