function calcAverage(arr){
    let sum = 0;
    for (let i=0; i < arr.length; i++){
        sum += Number(arr[i]);
    }
    return sum / arr.length;
}

function calcTip(bill) {

    let tip = (bill >= 50 && bill <= 300) ? 0.15 : 0.2;
    return (bill*tip);
}

//let bill = 100;
const bills = [22,295, 176,440,37,105,10,1100,86,52];
const tips=[];
const totals=[];
for (let i=0; i< bills.length; i++) {
    tips.push(calcTip(bills[i]));
    //console.log(tips[i], typeof tips);
    totals.push(bills[i]+tips[i]);
}

//console.log(bill.toFixed(2));
console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
// for (let i=0; i< bills.length; i++) {
//     totals[i] = (bills[i]*(1+tips[i])).toFixed(2);
// }
console.log("Total: ",totals);
console.log("Average: ",calcAverage(totals));
