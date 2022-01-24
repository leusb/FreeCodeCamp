// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.


function destroyer(arr, ...args) {
  let arglist = [];
  let clean = [];
  arglist.push(...args)

  for (let i=0; i<arr.length;i++){
    if (arglist.indexOf(arr[i])==-1){
      clean.push(arr[i])
    }
  }
  return (clean)
}

// call the arr as object and store it with slice in a new variable and then delete
function destroyer(arr) {
  let valsToRemove = Object.values(arguments).slice(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(item => item !== null);//remove empty values from arr causede by delete()
}

// use include() and store arr as array
function destroyer(arr) {
  var valsToRemove = Array.from(arguments).slice(1);
  console.log (arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}

//filter + include
function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}
