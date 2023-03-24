from newsapi import NewsApiClient
newsapi = NewsApiClient(api_key='4f9f84129c964ac9a6c6687006a2cc22')
all_articles = newsapi.get_everything(
    q='dhoni',
    language='en',
)
if len(all_articles)==0:
    print(0)
# ct=0
# for article in all_articles['articles']:
#     ct+=1
#     print('url: ',article['url'])
#     print('Source : ',article['source']['name'])
#     print('Title : ',article['title'])
#     print('Description : ',article['description'], '\n\n')
# print(ct)