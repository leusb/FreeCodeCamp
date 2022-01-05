class Rectangle:

    def __init__(self, width, height):
        self.width = width
        self.height = height
    def set_width (self, width):
        self.width = width
    def set_height (self, height):
        self.height = height
    def get_area (self):
        return self.height * self.width
    def get_perimeter (self):
        return (self.height + self.width)*2
    def get_diagonal (self):
        return (self.width ** 2 + self.height ** 2)** .5
    def get_picture (self,):
        if self.width > 50 or self.height >50:
            return "Too big for picture."
        picture = ""
        for j in range(self.height):
            picture += "* "*self.width+"\n"
        return (picture)
    def get_amount_inside (self,another_shape):
        return self.get_area() / another_shape.get_area()
    def __repr__(self):
        return f"Rectangle(width={self.width}, height={self.height})"

class Square(Rectangle):

    def __init__ (self, side_length):
        self.width = side_length
        self.height = side_length

    def set_side (self, side_length):
        self.width = side_length
        self.height = side_length

    def __repr__ (self):
        return f"Square(side={self.width})"


#test area
rect1 = Rectangle (8,4)
rect2 = Rectangle (4,4)
sqr = Square(4)
sqr.set_side(20)

print(sqr.get_area())
print (sqr.get_picture())

print (sqr)
