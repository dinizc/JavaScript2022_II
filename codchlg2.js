function calcTip(bill) {


    let tip = 0.2;
    if (bill >= 50 && bill <= 300) {
        tip=0.15
    } 
    return tip;
}

//let bill = 100;
const bills = [125, 100, 200];
const tips=[];
const totals=[];
for (let i=0; i< bills.length; i++) {
    tips[i] = calcTip(bills[i]);
}

//console.log(bill.toFixed(2));
console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
for (let i=0; i< bills.length; i++) {
    totals[i] = (bills[i]*(1+tips[i])).toFixed(2);
}
console.log(totals);






