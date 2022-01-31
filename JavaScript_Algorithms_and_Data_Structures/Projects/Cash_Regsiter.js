https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
https://dev.to/frolovdev/how-to-operate-with-monetary-values-in-javascript-3fal



const money ={
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

// define output variables
  let status ="";
  let change = [];

  //define objects to substract from with "while>""
  let claim= cash*100-price*100
  let changeOut= claim

  let cidTotal = 0;
  //remove 0 values from cid
  let filtered = cid.filter(unit=>unit[1]!==0).reverse();
  // modify filtered and move values to substraction variables
  filtered.forEach(unit =>{
    let currencyUnit = unit[0];
    let unitSum = unit [1]*100;
    cidTotal+=unitSum;
    let amount = 0;
    //subtract values from variables and put them into change with amount
    while(claim>=money[currencyUnit]&&unitSum>0){
      amount += money[currencyUnit];
      claim -= money[currencyUnit];
      unitSum -= money[currencyUnit];
    }
    if (amount !== 0){
      change.push([currencyUnit, amount / 100]);
    }
  });

  if (claim>0){
    status = "INSUFFICIENT_FUNDS";
    change =[];
  }
  else if (claim ==0 && changeOut==cidTotal){
    satus = "CLOSED";
    change = cid;
  }
  else{
    status = "OPEN";
  }
  return {'status':status, 'change':change};

}


console.log (checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90 ], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log (checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log (checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log (checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log (checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));


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
    // claim
    let claim = cash-price;

    //create a currency object (change) and the cid Total
    let change = {};
    let cidTotal = 0
    cid.forEach(n=>{
      let key = n[0];
      let value = n[1];
      change[key]= 0
        cidTotal+=n[1]
      })
      console.log(cidTotal)


      let cidObject ={};
      cid.forEach(n=>{
        let key = n[0];
        let value = n[1];
        cidObject[key] = value;
      })


      var cidOut = 0;
      for(var property in cidObject){
        cidOut+= cidObject[property];
      }
    // get amount of curreny units
    let numbers = Object.keys(money);
    // let unitList = []

    numbers.forEach(value =>{
      while (value<= claim && value <=cidObject[money[value]]){
        claim= claim.toFixed(2)-value;
        // unitList.push(money[value]);
        cidObject[money[value]]=cidObject[money[value]].toFixed(2)-value;
        change[money[value]]+=1*value;
      }
    })
    change.PENNY = parseFloat(change.PENNY.toFixed(2))

      //output
      let output ={
        status:"",
        change:[]
      }
      var totalchange = 0;
      for (var property in change) {
          totalchange += change[property];
      }
      // console.log(cidOut)
      // console.log(totalchange)

      if (totalchange<cash-price){
      output.status = "INSUFFICIENT_FUNDS",
      output.change = []
    }
      else if (totalchange == cidOut) {
        output.status = "CLOSED",
        output.change = Object.entries(change)
      }
      else{
        output.status ="OPEN",
        output.change = Object.entries(change).filter(n=>n[1]>0).reverse()
      }
      console.log(output)
  }

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90 ], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
