// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// function rot13(str) {
//   let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//   let solved = ""
//   for (let i = 0; i<str.length; i++){
//     let indexed = alphabet.indexOf(str[i]);
//     // add whitespaces and exclamation mark
//     if(indexed==-1){
//       solved += str[i]
//     }
//     // add letters
//     else if ((indexed+13)>=26){
//       solved += alphabet[(indexed+13)-26]
//   }
//     else{
//       solved+= alphabet[indexed+13]
//     }
//   }
//   return solved;
// }


// improved:

function rot13(str) {
  let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  let solved = ""
  for (let i = 0; i<str.length; i++){
    let indexed = alphabet.indexOf(str[i]);
    // add whitespaces and exclamation mark
    if(indexed==-1){
      solved += str[i]
    }
    // add letters
    else {
      updatedIndex = ((indexed+13)%26)
      solved += alphabet[updatedIndex];
    }
}
return solved;
}

console.log(rot13("SERR PBQR PNZC !!!"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
