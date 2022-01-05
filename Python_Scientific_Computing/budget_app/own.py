class Category:
#setting up cat
  def __init__(self, name):
    self.name = name
    self.total= 0.0
    self.ledger= list ()
#displaying stuff with repr

  def __repr__(self):
    ledger = f"{self.name:*^30}\n"
    n = 0
    for item in self.ledger:
      ledger += f"{item['description'][:23]:<23}{item['amount']:>7.2f}\n"
      # print maximal to 22nd character of the corresponding line. Left aligned with a distance of 22 characters between the right thing
      #The amount is right aligned with a distance of 7 from other elements. .2f lets you render the 2 digits afters the comma
      n += item['amount']
    ledger += f"Total: {self.total:.2f}"
    return ledger

#deposit method, that takes an amount and description
  def deposit (self, amount, description =""):
    self.total += amount
    self.ledger.append({"amount": amount, "description": description})
#withdrawal method, that takes an amount and description
  def withdraw (self, amount, description =""):
    abletowithdraw = self.check_funds(amount)
    if abletowithdraw:
      self.total -= amount
      self.ledger.append({"amount": -amount, "description": description})
    return abletowithdraw
#show balance
  def get_balance(self):
    return self.total
#transfer method  with amount and desired target category
  def transfer(self, amount, another_category):
    abletotransfer = self.check_funds(amount)
    if abletotransfer:
      self.withdraw(amount, f"Transfer to {another_category.name}")
      another_category.deposit(amount, f"Transfer from {self.name}")
    return abletotransfer
#check if entered amount ist bigger than balance
  def check_funds(self, amount):
    if amount > self.total:
      return False
    return True


def create_spend_chart(categories):

#create lists, that hold the total expenditure
    grandtotal = list()
    catpercent = list ()
    for i in categories:
        catsum = list()
        for j in i.ledger:
            transaction = j["amount"]
            if transaction <0:
                grandtotal.append(abs(transaction))
                catsum.append (abs(transaction))
        catpercent.append(sum(catsum))
# calculate the percentage of money spent in comparison to total expenditures
    percent = list()
    for i in catpercent:
        percent.append(i/sum(grandtotal))

    # adding a table
    output = "Percentage spent by category\n"
    x = ""
    for i in range (100, -1, -10):
        output += f"{i:>3}| "
        #adding bars: for each category one bar withb "o"s
        for j in percent:
            if j*100>=i:
                output += "o  "
            else:
                output += "   "
        output += "\n"

    # adding lines
    lines = 4 * " "
    lines += "---" * len(catpercent)+"-"
    output += lines +"\n"

    # below the line
    namelist = []
    for i in categories:
        namelist.append(i.name)
    #first letter capped
    capnames = list ()
    for name in namelist:
        capnames.append(name.title())

    # vertically ordered categorynames
    counter = 0
    testtext = ""
    x = max(capnames, key=len)
    for j in range (len(x)):
        output += " "*5
        row =""
        for item in capnames:
            try:
                row+=item[counter]+"  "
            except:
                row+= "   "
        counter +=1
        if counter <len(x):
            output += row +"\n"
        else:
            output += row
    return output

#test area
food = Category("Food")
food.deposit(1000, "initial deposit")
food.withdraw(10.15, "groceries")
food.withdraw(15.89, "restaurant and more food for dessert")
print(food.get_balance())
clothing = Category("Clothing")
food.transfer(50, clothing)
clothing.withdraw(25.55)
clothing.withdraw(100)
auto = Category("Auto")
auto.deposit(1000, "initial deposit")
auto.withdraw(15)
entertainment = Category ("entertainment")

print(food)
print(clothing)
print (auto)

print(create_spend_chart([food, clothing, auto]))


# business = Category("business")
# food = Category ("food")
# entertainment = Category ("entertainment")
#
# business.deposit(100)
# food.deposit(10)
# entertainment.deposit(100)
#
# print (business)
#
#
# print (create_spend_chart([business, food, entertainment]))
