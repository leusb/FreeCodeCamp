// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.




function pairElement(str) {
  let pairAT = "AT"
  let pairGC =  "GC"
  let result = []
  for (let i= 0; i<str.length; i++){
    let output = []
    if (pairAT.indexOf(str[i]) !== -1){
      output.push(str[i],pairAT.replace(str[i],""))
    }
    else {
      output.push(str[i],pairGC.replace(str[i],""))
    }
    result.push(output)
  }
  return (result)
}


pairElement("GCG");
pairElement("ATCGA")
pairElement("TTGAG")
pairElement("CTCTA")

// switch option:
function pairElement(str) {
  var paired = [];
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }
  return paired;
}

// dictionary option
function pairElement(str) {
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  var arr = str.split("");
  return arr.map(x => [x, pairs[x]]);
}
