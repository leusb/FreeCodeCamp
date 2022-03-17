Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {
  const newArr = arr.reduce((acc, item) => {
    //this part removes the brackets
    if (Array.isArray(item)) {
      acc = acc.concat(steamrollArray(item));
    }
    //if the input is not an array
    else {
     acc.push(item);
    }

    return acc;
  }, []);

  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
// steamrollArray([[["a"]], [["b"]]])
// steamrollArray([1, [2], [3, [[4]]]]);
// steamrollArray([1, [], [3, [[4]]]])
// steamrollArray([1, {}, [3, [[4]]]])

//this should help understand
let sth = ([1, [2], [3, [[4]]]])
for (let i = 0; i<sth.length; i++){
console.log(sth[i])
}
//you can concat an integer (or a string) with a list
let a = [1,2,3]
let b = 5

console.log(a.concat(b))


// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-steamroller/16079
