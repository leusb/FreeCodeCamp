// You are given two arrays and an index.
//
// Copy each element of the first array into the second array, in order.
//
// Begin inserting elements at index n of the second array.
//
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();
    newArr.splice(n, 0, ...arr1);
    return(newArr)
}
// splice ((start)index at which to start changing the array,(deleteCount)an Integer indictaing the number of elements in the array to remove from "start",(itemN) the items to add to the arrray, beginning from "start")

frankenSplice([1, 2, 3], [4, 5], 1)

// alternative
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
