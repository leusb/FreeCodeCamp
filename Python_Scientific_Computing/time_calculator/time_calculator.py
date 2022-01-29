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
                daystoadd +=int(restmin/1440)
        else:
            daystoadd = 0
    else:
        mintonextday = 1440/2 - startmin
        restmin = addmin-mintonextday
        if restmin > 0:
            daystoadd = 1
            if (restmin/1440) > 0:
                daystoadd +=int(restmin/1440)
        else:
            daystoadd = 0
    if daystoadd == 1:
        addedday = "next day"
    if daystoadd > 1:
        addedday = str(daystoadd) +" days later"

    #displaying days mo-fri
    if bool:
        daylist = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
        dayinput = bool.lower()
        position = daylist.index(dayinput)
        if daystoadd > 0:
            if int(position)+1+int(daystoadd)>7:
                substracted = daystoadd - (len(daylist)-position-1)
                dayz = substracted%7
                day = daylist[int(dayz)-1]
            else:
                day = daylist[int(position) + int(daystoadd)]
        else:
            day = daylist[position]


    #meridiem problem
    if meridiem == "PM":
        if meridiem == "PM" and int(halfdays)%2 == 0:
            meridiem = "PM"
        else:
            meridiem = "AM"
    #elif meridiem =="AM"
    else:
        if meridiem == "AM" and int(halfdays)%2 == 0:
            meridiem = "AM"
        else:
            meridiem = "PM"

    #output
    if bool:
        output = str(firstdigit)+":"+str(seconddigit) +" "+ meridiem+", "+day.title()
        if daystoadd > 0:
            output = str(firstdigit)+":"+str(seconddigit) +" "+ meridiem+", "+day.title()+" "+"("+addedday+")"
    else:
        output =  str(firstdigit)+":"+str(seconddigit) +" "+ meridiem
        if daystoadd > 0:
            output = str(firstdigit)+":"+str(seconddigit) +" "+ meridiem+" "+"("+addedday+")"

    return (output)



#tests
print (add_time("1:00 PM", "72:00", "Wednesday"))

# print (add_time("3:30 PM", "2:12"),"expected return: 5:42 PM")
# print (add_time("11:55 AM", "3:12"),"expected return: 3:07 PM")
# print (add_time("9:15 PM", "5:30"),"expected return: 2:45 AM (next day)")
# print (add_time("11:40 AM", "0:25"),"expected return: 12:05 PM")
# print (add_time("2:59 AM", "24:00"),"expected return: 2:59 AM (next day)")
# print (add_time("11:59 PM", "24:05"),"expected return: 12:04 AM (2 days later)")
# print (add_time("8:16 PM", "466:02"),"expected return: 6:18 AM (20 days later)")
# print (add_time("5:01 AM", "0:00"),"expected return: 5:01 AM")
# print (add_time("3:30 PM", "2:12", "Monday"),"expected return: 5:42 PM, Monday")
# print (add_time("2:59 AM", "24:00", "saturDay"),"expected return: 2:59 AM, Sunday (next day)")
# print (add_time("11:59 PM", "24:05", "Wednesday"),"expected return: 12:04 AM, Friday (2 days later)")
# print (add_time("8:16 PM", "466:02", "tuesday"),"expected return: 6:18 AM, Monday (20 days later)")
