def add_time(start, duration, bool = False):

    #start hours:
    splitted =start.split()
    meridiem = splitted [1]
    h = splitted [0]
    stime = h.split(":")
    shour = stime [0]
    sminute = stime [1]
    #duration
    splitter =duration.split(":")
    addhour = splitter [0]
    addminute = splitter [1]

    #conversion to minutes and adding up hours
    startmin = int(shour) * 60 + int (sminute)
    addmin = int(addhour) * 60 + int (addminute)
    firstdigit = ((startmin + addmin)//60)
    seconddigit =  ((startmin + addmin)%60)
    #days = firstdigit / 24

    #tweeking firstdigit
    if firstdigit < 12:
        firstdigit = str(firstdigit)
        halfdays = 0
    else:
        halfdays = firstdigit /12
        firstdigit = firstdigit - int(halfdays)*12
        if firstdigit == 0:
            firstdigit = 12
    #tweeking seconddigit
    if seconddigit < 10:
        seconddigit = "0"+str(seconddigit)

    #days added problem
    if meridiem == "AM":
        mintonextday = 1440 - startmin
        restmin = addmin-mintonextday
        if restmin > 0:
            daystoadd = 1
            if (restmin/1440) > 0:
                daystoadd +=restmin/1440
                print (int(daystoadd))
    else:
        mintonextday = 1440/2 - startmin
        restmin = addmin-mintonextday
        if restmin > 0:
            daystoadd = 1
            if (restmin/1440) > 0:
                daystoadd +=restmin/1440
                print (int(daystoadd))
    #if daystoadd == 1:
    #    daystoadd = "next day"


    #displaying days mo-fri
    daylist = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
    dayinput = bool.lower()
    #position = daylist.index(dayinput)
    #days = int (days)
    #day = daylist[position + days]

    #for j in range(daylist):
    #    for i in daylist:
    #        print (i)
    #meridiem problem
    if meridiem == "PM":
        if meridiem == "PM" and halfdays%2 == 0:
            meridiem = "PM"
        else:
            meridiem = "AM"
    #elif meridiem =="AM"
    else:
        if meridiem == "AM" and halfdays%2 == 0:
            meridiem = "AM"
        else:
            meridiem = "PM"



    #output
    if bool:
        return ( str(firstdigit)+":"+str(seconddigit) +" "+ meridiem+" ")
    else:
        return ( str(firstdigit)+":"+str(seconddigit) +" "+ meridiem)
    #print(hours,minutes)




print(add_time("11:59 PM", "24:05"))
