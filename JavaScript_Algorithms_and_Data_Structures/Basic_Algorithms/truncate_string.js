// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  let targetstring = ""
  for (let i = 0; i<num; i++){
    targetstring +=str[i]}

    if (str.length > num){
      return targetstring.concat("...");
    }
    else{
      return str;
    }
}

console.log (truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));


// obiously way easier with slice(0,num) and ternary
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
