// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let res = []
  let testArr = arr.slice()
  for (let i=0; i <Math.ceil(testArr.length/size); i++){
    res.push(arr.splice(0,size))
  }
  return(res)
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2)
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)


// Alternative
function chunkArrayInGroups(arr, size) {
  let temp = [];
  let result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}

// Alternative
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
// Alternative
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

//Alternative
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

//Alternative
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups(arr.slice(size), size)
    );
  }
}
