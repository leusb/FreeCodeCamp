// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.


function findElement(arr, func) {
  let num = 0
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(arr[i])) {
      return arr[i];
    }
  }

  return undefined;
}

// find() method
function findElement(arr, func) {
  return arr.find(func);
}
//  map() method + indexof()method
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

// recursive
function findElement(arr, func) {
  return arr.length && !func(arr[0])
    ? findElement(arr.slice(1), func)
    : arr[0];
}
