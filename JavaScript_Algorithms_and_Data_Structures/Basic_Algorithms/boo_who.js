// Check if a value is classified as a boolean primitive. Return true or false.


function booWho(bool) {
  if (bool === false | bool === true){
    return true
  }
  return false
}

//Alternative
function booWho(bool) {
  return typeof bool === "boolean";
}
// typopf returns string

console.log(booWho(null));

console.log (booWho(true))

console.log (booWho(false))

console.log (booWho([1, 2, 3]))

console.log (booWho([].slice))

console.log (booWho({ "a": 1 }))

console.log (booWho(1))

console.log (booWho(NaN))

console.log (booWho("a"))

console.log (booWho("true"))

console.log (booWho("false"))
