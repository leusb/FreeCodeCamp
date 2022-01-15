// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
function repeatStringNumTimes(str, num) {

  let emptiboi = ""
  for (let i = 0;i<num; i++){
    emptiboi+=str
  }
  return emptiboi;
}

console.log(repeatStringNumTimes("abc", 3));


// recursion:
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

//ternary + recursion, nice
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
