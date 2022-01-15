// Check if a string (first argument, str) ends with the given target string (second argument, target).
//
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.


function confirmEnding(str, target) {
  if (str.slice(-(target.length))===target){
    return true
  }
}
  else {
    return false
  }
}

//short:
function confirmEnding(str, target) {
  return (str.slice(-(target.length))===target)
}

// regex solution
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}
$ <- end of string
i <- case insensetive
