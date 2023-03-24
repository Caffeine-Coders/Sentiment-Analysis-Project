from transformers import pipeline
sentiment_pipeline = pipeline(model="finiteautomata/bertweet-base-sentiment-analysis")
data = ["Chahar issues massive ‘MS Dhoni’ update after reporter’s ‘IPL retirement’ claim"]
print(sentiment_pipeline(data))
