//return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
  let listed = str.split(" ")
  let result = 0
  for (let i = 0; i< listed.length; i++){
    if (listed[i].length>result){
      result = listed[i].length
    }
  }
  return (result)
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
