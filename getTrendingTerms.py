# #install pytrends
# # !pip install pytrends
#

#
# #get today's trending topics
# trending = pytrends.trending_searches(pn='united_states')
# trending.head(20)
#
# #Convert top trending searches into dict and get list of top terms
# trendingDict = trending.to_dict('split')['data']
# print(trendingDict)
# print(type(trendingDict))
#
# #list of #1 search terms from the last week



#import the libraries
import pandas as pd
from pytrends.request import TrendReq
pytrends = TrendReq(hl='en-US', tz=360)
import schedule
import time

#List of top searches weekly
topSearchesWeekly = []

#schedule to place #1 search term in topSearchesWeekly list at 12:00am every day

def addTrendingSearch():
    trending = pytrends.trending_searches(pn='united_states')
    trending.head(20)
    trendingDict = trending.to_dict('split')['data']
    topSearchesWeekly.append(trendingDict[0])
    print(topSearchesWeekly)

def clearSearchTerms():
    topSearchesWeekly = []

schedule.every().day.at("23:59").do(addTrendingSearch)
schedule.every().sunday.at("23:55").do(clearSearchTerms)

while True:
    schedule.run_pending()
    time.sleep(60) # wait one minute
