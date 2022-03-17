// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2.
// In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.


function sumPrimes(num) {
  let testlist = []
  let testNum = 1
  let result = []

  while (testNum<=num){
    testlist.push(testNum)
    let restList = []
    for (let i = 0; i<testlist.length; i++){
      if (testNum%testlist[i]==0){
        restList.push(testlist[i])
      }
    }
    if (restList.length ==2){
    result.push(restList[restList.length-1])
    }
    testNum+=1
  }
  return result.reduce((x,y)=>x+y)
}

sumPrimes(10);
sumPrimes(977);
