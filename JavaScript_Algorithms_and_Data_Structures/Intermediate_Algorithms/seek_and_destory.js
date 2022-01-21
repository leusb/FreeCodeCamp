// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.


function destroyer(arr,...args) {
  let clean = []
  for (let i = 0; i<arr.length;i++){
    if (arr[i] !=args[0]&arr[i]!=args[1]){
      clean.push(arr[i])
    }
  }
  return clean
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
