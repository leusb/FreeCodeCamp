// Return true if the given string is a palindrome. Otherwise, return false.
//
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
//
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
//
// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
//
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.



function palindrome(str) {
  let lowDenseStripped= str.replace(' ','').toLowerCase().replace(/[^0-9a-z]/g, '');
  let reversed = ""
  for (let i =lowDenseStripped.length-1; i>-1;i--){
    reversed += lowDenseStripped[i]
  }
 return reversed === lowDenseStripped
}

palindrome("eye");


// note: if youd store the string in an array you could use the reverse() method
// return lowDenseStripped === lowDenseStripped.reverse();

// improved:
function palindrome(str) {
  let lowDenseStripped = str.toLowerCase().replace(/[^a-z\d]/g, '');
return lowDenseStripped.split('').reverse().join('') ===lowDenseStripped;
}
