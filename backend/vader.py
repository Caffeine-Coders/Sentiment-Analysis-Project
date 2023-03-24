import nltk
from nltk.sentiment import SentimentIntensityAnalyzer
# Load VADER
sia = SentimentIntensityAnalyzer()
# Define function for VADER sentiment analysis
def vader_sentiment(text):
    # Use VADER to get sentiment intensity scores
    scores = sia.polarity_scores(text)
    # Classify sentiment based on compound score
    if scores['compound'] >= 0.05:
        sentiment = 'positive'
    elif scores['compound'] <= -0.05:
        sentiment = 'negative'
    else:
        sentiment = 'neutral'
    return sentiment
# Test the function
text = "Chahar issues massive ‘MS Dhoni’ update after reporter’s ‘IPL retirement’ claim"
sentiment = vader_sentiment(text)
print("Sentiment:", sentiment)
