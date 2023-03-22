import snscrape.modules.twitter as sntwitter
import pandas as pd
import multiprocessing
from googletrans import Translator

tweets_list = []
data = open("data.txt", 'w', encoding='utf-8')

def get_tweets(query):
    for i, tweet in enumerate(sntwitter.TwitterSearchScraper(query).get_items()):
        if i >= 200:
            break
        data.write(tweet.rawContent)
        data.write("\n")

if __name__ == '__main__':
    get_tweets("MS Dhoni since:2023-03-19 until:2023-03-20")
    get_tweets("MS Dhoni since:2023-03-18 until:2023-03-19")
    get_tweets("MS Dhoni since:2023-03-17 until:2023-03-18")