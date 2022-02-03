// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// Check the assertion tests for examples.

function uniteUnique(...arr) {
  let c = arr.join().split(",")
  let emptyboi = []
  for (let i =0; i<c.length; i++){
    if (emptyboi.indexOf(c[i])===-1){
      emptyboi.push(c[i])
    }
  }
 console.log (emptyboi)
 let result =[]
 for (let i = 0; i<emptyboi.length; i++){
   result.push(parseInt(emptyboi[i]))
 }
 return (result)

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
uniteUnique([1, 2, 3], [5, 2, 1])
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
