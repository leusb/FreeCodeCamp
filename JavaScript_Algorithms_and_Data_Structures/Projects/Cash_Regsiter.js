

// first version
//   const money ={
//     "100.00": "ONE HUNDRED",
//     "20.00": "TWENTY",
//     "10.00": "TEN",
//     "5.00": "FIVE",
//     "1.00": "ONE",
//     "0.25": "QUARTER",
//     "0.10": "DIME",
//     "0.05": "NICKEL",
//     "0.01": "PENNY"
//   }
//
//   function checkCashRegister(price, cash, cid) {
//     // claim
//     let claim = cash-price;
//
//     //create a currency object (change) and the cid Total
//     let change = {};
//     let cidTotal = 0
//     cid.forEach(n=>{
//       let key = n[0];
//       let value = n[1];
//       change[key]= 0
//         cidTotal+=n[1]
//       })
//       console.log(cidTotal)
//
//
//       let cidObject ={};
//       cid.forEach(n=>{
//         let key = n[0];
//         let value = n[1];
//         cidObject[key] = value;
//       })
//
//
//       var cidOut = 0;
//       for(var property in cidObject){
//         cidOut+= cidObject[property];
//       }
//     // get amount of curreny units
//     let numbers = Object.keys(money);
//     // let unitList = []
//
//     numbers.forEach(value =>{
//       while (value<= claim && value <=cidObject[money[value]]){
//         claim= claim.toFixed(2)-value;
//         // unitList.push(money[value]);
//         cidObject[money[value]]=cidObject[money[value]].toFixed(2)-value;
//         change[money[value]]+=1*value;
//       }
//     })
//     change.PENNY = parseFloat(change.PENNY.toFixed(2))
//
//       //output
//       let output ={
//         status:"",
//         change:[]
//       }
//       var totalchange = 0;
//       for (var property in change) {
//           totalchange += change[property];
//       }
//       // console.log(cidOut)
//       // console.log(totalchange)
//
//       if (totalchange<cash-price){
//       output.status = "INSUFFICIENT_FUNDS",
//       output.change = []
//     }
//       else if (totalchange == cidOut) {
//         output.status = "CLOSED",
//         output.change = Object.entries(change)
//       }
//       else{
//         output.status ="OPEN",
//         output.change = Object.entries(change).filter(n=>n[1]>0).reverse()
//       }
//       console.log(output)
//   }
//
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90 ], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// // checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// // checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// // checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// // checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])



//improved
const currencyUnit ={
  "PENNY":1,
  "NICKEL":5,
  "DIME":10,
  "QUARTER":25,
  "ONE":100,
  "FIVE":500,
  "TEN":1000,
  "TWENTY":2000,
  "ONE HUNDRED": 10000
}

function checkCashRegister(price, cash, cid){
  //js cant handle floats pretty well, so I factorized the currencyUnit by 100
  let changeSum= cash*100-price*100
  let changeSumCheck= changeSum
  let change =[];
  let status ='';

  let cidSum = 0;
  let filteredCid = cid.filter(elem=>elem[1]!==0).reverse();
  filteredCid.forEach(elem =>{
    let curr = elem[0];
    let currSum = elem [1]*100;
    cidSum+=currSum;
    let amount = 0;
    while(changeSum>=currencyUnit[curr]&&currSum>0){
      amount += currencyUnit[curr];
      changeSum -= currencyUnit[curr];
      currSum -= currencyUnit[curr];
    }
    if (amount !== 0){
      change.push([curr, amount / 100]);
    }
  });

  if (changeSum>0){
    status = "INSUFFICIENT_FUNDS";
    change =[];
  }
  else if (changeSum ==0 && changeSumCheck==cidSum){
    status = "CLOSED";
    change = cid;
  }
  else{
    status = "OPEN";
  }
  return {'status': status, 'change':change};
}


// console.log (checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90 ], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log (checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log (checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log (checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log (checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
