import numpy as np

#input: 9 digit list
#convert that list in a 3x3 numpy arrray
#the function should return a dictionary containing the mean, vairance, stnadard dev, max min and sum along both axes and for the flattened matrix


def calculate (list):
    yetemptyboi = {}
    #forming a 3x3 array out of the input list
    if len(list) != 9:
        raise ValueError ("List must contain nine numbers.")
    else:
        arr = np.array(list).reshape(3,3)
        larr= np.array(list)

        #mean
        mean = [arr.mean(axis=0).tolist(),arr.mean(axis=1).tolist(),larr.mean()]
        yetemptyboi.update({"mean":mean})

        #variance
        variance = [arr.var(axis=0).tolist(),arr.var(axis=1).tolist(),larr.var()]
        yetemptyboi.update({"variance":variance})

        #standard deviation
        standard_deviation = [arr.std(axis=0).tolist(),arr.std(axis=1).tolist(),larr.std()]
        yetemptyboi.update({"standard deviation":standard_deviation})

        #max
        max = [arr.max(axis=0).tolist(),arr.max(axis=1).tolist(),larr.max()]
        yetemptyboi.update({"max":max})

        #min.
        min = [arr.min(axis=0).tolist(),arr.min(axis=1).tolist(),larr.min()]
        yetemptyboi.update({"min":min})

        #sum
        sum = [arr.sum(axis=0).tolist(),arr.sum(axis=1).tolist(),larr.sum()]
        yetemptyboi.update({"sum":sum})

        return yetemptyboi

# https://numpy.org/doc/stable/reference/generated/numpy.ndarray.tolist.html





print (calculate([2,6,2,8,4,0,1,]))

print ({'mean': [[4.666666666666667, 4.333333333333333, 2.6666666666666665], [5.0, 3.0, 3.6666666666666665], 3.888888888888889], 'variance': [[9.555555555555555, 11.555555555555557, 4.222222222222222], [10.666666666666666, 0.0, 14.888888888888891], 9.209876543209875], 'standard deviation': [[3.0912061651652345, 3.39934634239519, 2.0548046676563256], [3.265986323710904, 0.0, 3.8586123009300755], 3.0347778408328137], 'max': [[9, 9, 5], [9, 3, 9], 9], 'min': [[2, 1, 0], [1, 3, 0], 0], 'sum': [[14, 13, 8], [15, 9, 11], 35]})
