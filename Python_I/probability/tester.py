test = ['blue', 'green', 'blue', 'green', 'black']


expected  = ['blue','blue','green']

check =  all(item in test for item in expected)

if check:
    print ("success")
