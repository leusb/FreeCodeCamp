// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
let testlist = [1,1]
  let tester = 0
while (tester<num){
  tester = testlist[testlist.length-1]+testlist[testlist.length-2]
  if (tester <= num){
  testlist.push(tester)
  }
}

let result = (testlist.filter(x=>x%2!=0).reduce((prev,cur)=> prev+cur))
return result
}

sumFibs(1)
sumFibs(1000)
sumFibs(40000)
sumFibs(4)
sumFibs(75024)
sumFibs(75025)

// noList
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}
