testlist = ["einseee","zwei","drei"]


# counter = 0
# textfile = ""
# x = max(testlist, key=len)
# for j in range (len(x)):
#     row =""
#     for item in testlist:
#         try:
#             row += item[counter]
#         except:
#             row += " "
#     textfile += row +"\n"
#     counter+=1
# textfile += "\ntest"
x=list()
for names in testlist:
    x.append(names.title())

print (x)
