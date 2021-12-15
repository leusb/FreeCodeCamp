import pandas as pd
import numpy as np

# Read data from file
df = pd.read_csv("adult.data.csv")

#race
race_count=df['race'].value_counts()

#average age men
average_age_men = (((df[df['sex']=="Male"])["age"]).sum()/((df[df['sex']=="Male"])["age"]).size).round(1)

#percentage bachelors
percentage_bachelors = round((len(df[df['education']=="Bachelors"])/len(df['education']))*100,4)

#higher education
degree = df[(df['education']=="Bachelors")|(df['education']=="Masters")|(df['education']=="Doctorate")]
higher_education = round(len(degree[degree["salary"]==">50K"])/len(degree)*100,1)
print (higher_education)

#lower education
lower_education = 100-higher_education

#higher education rich

#lower education richt

#min work hours

#rich percentage

#highest earning country

#highes earning country percentage

#top IN occupation
