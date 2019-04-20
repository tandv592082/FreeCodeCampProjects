function checkCashRegister(price, cash, cid) {
    var units = [
        {name: 'PENNY', value: 0.01},
        {name: 'NICKEL', value: 0.05},
        {name: 'DIME', value: 0.1},
        {name: 'QUARTER', value: 0.25},
        {name: 'ONE', value: 1},
        {name: 'FIVE', value: 5},
        {name: 'TEN', value: 10},
        {name: 'TWENTY', value: 20},
        {name: 'ONE HUNDRED', value: 100}
    ]

    //forget reverse arr
    units = units.reverse()

    var change = cash - price;
    var result = {status: '', change: []}
    var newCid = []
    var totalPrice = cid.reduce((total, el) => total + el[1], 0)
    if(totalPrice === change){
        result.status = 'CLOSED';
        result.change = cid;
        return result;
    }
    else if(totalPrice < change){
        result.status = 'INSUFFICIENT_FUNDS';
        return result;
    }
    else{
        var currentUnit = 0;
        units.map((el, index) => {
            while(change >= el.value && currentUnit < cid[9 - index - 1][1]){
                change = Math.round((change -  el.value)*100)/100;
                currentUnit += el.value;
                
            }
            
            if(currentUnit > 0){
                newCid.push([el.name, currentUnit])
            }
            currentUnit = 0;
        })
        if(change > 0){
            result.status = 'INSUFFICIENT_FUNDS';
            return result;
        }
        result.status = 'OPEN';
        result.change = newCid;
        return result;

    }
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))