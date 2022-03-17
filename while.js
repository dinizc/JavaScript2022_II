// Example 1
// let rep=1;
// while (rep <=10){
//     console.log(`Repetition ${rep}`);
//     rep++;
// }

// Example 2
let dice = Math.trunc((Math.random() * 6)+1);
while (dice !== 6){
//    dice = (Math.random() * 6).toFixed(0);
    console.log(dice);
    dice = Math.trunc((Math.random() * 6)+1);
}
console.log("Ganhou:",dice);
