import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import linregress

def draw_plot():
    df = pd.read_csv("epa-sea-level.csv")



    # Create scatter plot
    fig, ax = plt.subplots(figsize =(20,6))
    ax.scatter(df['Year'],df['CSIRO Adjusted Sea Level'])

    # Create first line of best fit
    prd1 = pd.Series([int(i) for i in range(1880, 2051)])
    x=df['Year']
    y = df['CSIRO Adjusted Sea Level']
    slope, intercept, r_value, p_value, std_err = linregress(x,y)
    ax.plot (prd1, intercept + slope*prd1, color="red")


    # Create second line of best fit
    recent = df[df['Year']>=2000]
    prd2 = pd.Series([int(i) for i in range(2000, 2051)])
    xr=recent['Year']
    yr = recent['CSIRO Adjusted Sea Level']
    slope, intercept, r_value, p_value, std_err = linregress(xr,yr)
    ax.plot (prd2, intercept + slope*prd2, color ='blue')


    # Add labels and title
    plt.title("Rise in Sea Level")
    plt.xlabel("Year")
    plt.ylabel("Sea Level (inches)")


    # Save plot and return data for testing (DO NOT MODIFY)
    plt.savefig('sea_level_plot.png')
    return plt.gca()
