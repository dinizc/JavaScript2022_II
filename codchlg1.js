const calcAverage = (a,b,c) => (a + b +c )/3;
//console.log(calcAverage(2,4,6));

let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >=2 * avgKoalas) {
        console.log(`Dolphins win! ( ${avgDolphins} vs
            ${avgKoalas})`);
    } else if (avgKoalas >= 2* avgDolphins){
        console.log(`Koalas win! ( ${avgKoalas} vs
            ${avgDolphins})`);
            
    } else {
        console.log(`No team wins!`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);
//Test 1
checkWinner(100,200);
checkWinner(300,100);

//Test 2
scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
