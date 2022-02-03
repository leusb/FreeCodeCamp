// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.


function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let start = alphabet.indexOf(str[0])
  for (let i = 0; i<str.length;i++){
    if (alphabet[start]!==str[i]){
      return(alphabet[start])
    }
    start+=1
  }
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno")
fearNotLetter("stvwx")
fearNotLetter("bcdf")
fearNotLetter("abcdefghijklmnopqrstuvwxyz")

// using charCodeAt and String.fromCharCode

function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

//shorter
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
