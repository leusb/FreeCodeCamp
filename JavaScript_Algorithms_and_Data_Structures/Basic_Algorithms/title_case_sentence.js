// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.


function titleCase(str) {
  let splitted = str.toLowerCase().split(" ")
  let combined = []
  for (let i = 0; i<splitted.length;i++){
    combined[i] = splitted[i].charAt(0).toUpperCase()+splitted[i].slice(1);
  }
combined.join(" ")
}

console.log (titleCase("I'm a little tea pot"))
console.log (titleCase("sHoRt AnD sToUt"))
console.log (titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))


// Alternative:
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

// Replace Alternative
function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, L => L.toUpperCase());
}
