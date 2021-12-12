def arithmetic_arranger (problems, bool=False):
    first = ''
    second = ''
    lines = ''
    results = ''

    for problem in problems:
        n1 = problem.split(" ")[0]
        op = problem.split(" ")[1]
        n2 = problem.split(" ")[2]

        if len(problems) > 5:
            return ("Error: Too many problems.")

        if len(n1)>=5 or len(n2)>=5:
            return ("Error: Numbers cannot be more than four digits.")

        if op == "*" or op == "/":
            return("Error: Operator must be '+' or '-'.")

        if not n1.isnumeric() or not n2.isnumeric():
            return ("Error: Numbers must only contain digits.")

        #result
        res = ""
        if op == "+":
            res = str(int(n1) + int(n2))
        elif op == "-":
            res = str(int(n1) - int(n2))

        length =  max(len(n1),len(n2)) + 2
        top = str(n1).rjust(length)
        bottom = op + str(n2).rjust(length-1)
        result = str(res).rjust(length)

        #lines
        line = ""
        for position in range(length):
            line += '-'
        # adding stuff
        if problem != problems[-1]:
              first += top + '    '
              second += bottom + '    '
              lines += line + '    '
              results += result + '    '
        # the last row does not need '  '
        else:
          first += top
          second += bottom
          lines += line
          results += result


    if bool:
        x = (first+"\n"+ second+"\n"+ lines+"\n"+results)
    else:
        x = (first+"\n"+ second+"\n"+ lines)

    return x

#test
#print((arithmetic_arranger(['3801 - 2', '123 + 49'],True)))
