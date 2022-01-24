https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/


const money ={
  "100.00": "ONE HUNDRED",
  "20.00": "TWENTY",
  "10.00": "TEN",
  "5.00": "FIVE",
  "1.00": "ONE",
  "0.25": "QUARTER",
  "0.10": "DIME",
  "0.05": "NICKEL",
  "0.01": "PENNY"
}

function checkCashRegister(price, cash, cid) {
  //2-D Array(cid) to object
  let cidObject ={};
  cid.forEach(n=>{
    let key = n[0];
    let value = n[1];
    cidObject[key] = value;
  })
  console.log (cidObject)


  let claim = cash-price;
  let change = []
  let numbers = Object.keys(money);

  console.log ("Claim: "+claim);

  numbers.forEach(value =>{
    while (value <=claim && value <= cidObject[money[value]]){
      change.push(money[value]);
      claim-=value
      cidObject[money[value]]-=value
    }
  })
  console.log (change);
  console.log(cidObject)
}



// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90 ], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
