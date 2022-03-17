// Convert the given number into a roman numeral.

var convert = {1: "I", 2: "II", 3: "III",  4 : "IV", 5: "V", 6: "VI", 7 : "VII", 8 : "VIII", 9 : "IX",
10 : "X", 20 : "XX", 30 : "XXX", 40 : "XL", 50 : "L", 60 : "LX", 70 : "LXX", 80 : "LXXX", 90 : "XC",
100 : "C", 200 : "CC", 300 : "CCC", 400 : "CD", 500 : "D", 600 : "DC", 700 : "DCC", 800 : "DCCC", 900 : "CM",
1000: "M", 2000: "MM", 3000: "MMM"};

function convertToRoman(num) {
  let stringed = num.toString().split('')
  // converting the input number  "num" to  an array "stringed"
  let roman = ""
  for (let i = 0; i < stringed.length;i++){
    // explanation: This just appends the right roman number to "roman" for each digit in the number sorted from thousands decending
    // For readability you could store the expression in convert([]) as a variable
     if (convert[stringed[i]*(Math.pow(10,stringed.length-(i+1)))]){
       roman += convert[stringed[i]*(Math.pow(10,stringed.length-(i+1)))]
     }
  }
  return(roman)
}


//different approach (substracting)
function convertToRoman(num){
  let number  = {1: "I", 4 : "IV", 5: "V", 9 : "IX",
  10 : "X", 40 : "XL", 90 : "XC",
  100 : "C", 400 : "CD", 500 : "D", 900 : "CM",
  1000: "M"};

  let = transformed = "";
  let keys = Object.keys(number).reverse();
  keys.forEach(key =>{
    while (key <= num){
      transformed += number[key];
      num -= key;
    }
  })
  return  console.log(transformed);
}




convertToRoman(2)
convertToRoman(3)
convertToRoman(4)
convertToRoman(5)
convertToRoman(9)
convertToRoman(12)
convertToRoman(16)
convertToRoman(29)
convertToRoman(44)
convertToRoman(45)
convertToRoman(68)
convertToRoman(83)
convertToRoman(97)
convertToRoman(99)
convertToRoman(400)
convertToRoman(500)
convertToRoman(501)
convertToRoman(649)
convertToRoman(798)
convertToRoman(891)
convertToRoman(1000)
convertToRoman(1004)
convertToRoman(1006)
convertToRoman(1023)
convertToRoman(2014)
convertToRoman(3999)
