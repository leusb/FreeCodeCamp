import pandas as pd
import numpy as np


# Read data from file
df = pd.read_csv("adult.data.csv")

#race
race_count=df['race'].value_counts()

#average age men
average_age_men = ((df[df['sex']=="Male"])["age"]).mean().round(1)
# alternative:  round(df.loc[df['sex'] == 'Male', 'age'].mean(),1)

#percentage bachelors
percentage_bachelors = round((len(df[df['education']=="Bachelors"])/len(df['education']))*100,1)

#higher education
higher_education = df[df['education'].isin(['Bachelors', 'Masters', 'Doctorate'])]
#alternative: use common logic ""&""

#lower education
lower_education = df[~df['education'].isin(['Bachelors', 'Masters', 'Doctorate'])]

#higher education rich
degree = df[(df['education']=="Bachelors")|(df['education']=="Masters")|(df['education']=="Doctorate")]
higher_education_rich = round(len(degree[degree["salary"]==">50K"])/len(degree)*100,1)

#lower education rich
no_degree = df[(df['education']!="Bachelors")&(df['education']!="Masters")&(df['education']!="Doctorate")]
lower_education_rich=round(len(no_degree[no_degree['salary']==">50K"])/len(no_degree)*100,1)

#min work hours
min_work_hours = min(df["hours-per-week"])

#num min workers
num_min_workers = len(df[df['hours-per-week']== min_work_hours])


#rich percentage
rich_percentage = round(len (df[(df["hours-per-week"]==1) & (df['salary']==">50K")])/len(df[df["hours-per-week"]==1])*100,1)
print (rich_percentage)

#highest earning country
highest_earning_country = (df[df['salary'] == '>50K']['native-country'].value_counts()/ df['native-country'].value_counts() * 100).sort_values(ascending=False).fillna(0).idxmax()
#note: it is possible to divide value_counts() by each other
#highes earning country percentage
highest_earning_country_percentage = round(len(df[(df['native-country'] == highest_earning_country) & (df['salary'] == '>50K')]) / len(df[(df['native-country'] == highest_earning_country)])*100,1)

#top IN occupation
top_IN_occupation = df[(df['salary'] == ">50K") & (df['native-country'] == "India")]["occupation"].value_counts().index[0]
    # r_India = df[(df["native-country"]=="India") &(df["salary"]==">50K")]
    # top_IN_occupation = r_India["occupation"].value_counts().index[0]
