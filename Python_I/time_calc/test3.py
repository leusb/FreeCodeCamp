bool = "tuesday"

daylist = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]


dayinput = bool.lower()
position = daylist.index(dayinput)
if daystoadd >0:
    if int(position)+1+int(daystoadd)>7:
        substracted = daystoadd - (position +1)
        dayz = subtracted%7
        day = daylist[int(dayz)-1]
    else:
        day = daylist[int(position) + int(daystoadd)]
else:
    day = daylist[position]
