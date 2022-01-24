// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// function diffArray(arr1, arr2) {
//   const newArr = [];
//   for (let i = 0; i<arr1.length; i++){
//     if (arr2.indexOf(arr1[i])<0){
//     newArr.push(arr1[i]);
//     }
//   }
//
//   for (let i = 0; i<arr2.length; i++){
//     if (arr1.indexOf(arr2[i])<0){
//     newArr.push(arr2[i]);
//     }
//   }
//
// console.log(newArr)
// }

// now as a function

function diffArray(arr1, arr2) {
  const newArr = [];

  function symmetriDiff(max1, max2){
    for (let i = 0; i<max1.length; i++){
        if (max2.indexOf(max1[i])<0){
        newArr.push(max1[i]);
        }
      }

  }
  symmetriDiff(arr1,arr2)
  symmetriDiff(arr2,arr1)
  return newArr;
}

// With filter()
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}




diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
