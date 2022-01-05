import copy
import random

class Hat:

    def __init__ (self, **args):
        # use ** to transform the arguments into a dictionary
        self.args = args
        self.contents =[]
        for i in self.args.keys():
            self.contents+=(self.args[i]*[i])
#draw method: which picks a random ball if the number drawn is <= the list
#the drawn element is removed from the list
    def draw (self, random_number):
        try:
            draws = random.sample(self.contents,random_number)
        except:
            draws = copy.deepcopy(self.contents)
        for n in draws:
            self.contents.remove(n)

        return draws

#test area1
hat1 = Hat(yellow=3, blue=2, green=6)
#
# print (hat1.contents)
# print (hat1.draw(5))
# print (hat1.contents)

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    M = 0

    # making a copy of the hat and perform the draw method on it.
    for i in range (num_experiments):
        hat_copy =  copy.deepcopy(hat)
        drawn = hat_copy.draw(num_balls_drawn)

        expected = []
        for i in expected_balls.keys():
           expected+= expected_balls[i]*[i]

# explanation: go through the items in expected and
# remove them from the drawn list if they are in there
# if the element is not in drawn return false
# if the element is in their the loop starts again
        c = True
# the loop is repeated for the number of element in expected
#therefore it exactly checks if drawn matches expected
        for b in expected:
            if b in drawn:
                drawn.remove(b)
            else:
                c = False

        if c is True:
            M+=1

    probability = M / num_experiments
    return probability



#test area2

hat = Hat(black=6, red=4, green=3)
print (experiment(hat=hat, expected_balls={"red":2,"green":1},num_balls_drawn=5,num_experiments=1000))


# hat = Hat(blue=3, red=2, green=6)
# print (experiment(hat=hat, expected_balls={"blue":2,"green":1},num_balls_drawn=4,num_experiments=100))

#https://www.youtube.com/watch?v=5fSTndU5uWo
