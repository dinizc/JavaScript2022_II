'use strict';

//// Functions
//Function example 1
function logger() {
    console.log('Log entry')
}

// caling / running / invoking
logger();
logger();
logger();

//Function example 2
function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and
    ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(5,2));


//Function example 3 - Declaration
function calcAge1(birthYear) {
    return new Date().getFullYear() - birthYear;
    
}
console.log(calcAge1(50));

//Function example 4 - Expression
const calcAge2 = function (birthYear) {
    return new Date().getFullYear() - birthYear;
}
console.log(calcAge2(33));

//Function example 5 - Arrow Function 1
const calcAge3 = (birthYear) => {
    return new Date().getFullYear() - birthYear;
    
}
console.log(calcAge3(13));

//Function example 5 - Arrow Function 2
const calcAge4 = birthYear => new Date().getFullYear() - birthYear;
console.log(calcAge4(23));

//Function Years until retirement example
const yearsUntilRetire = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 68 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetire(1970, 'Afonso'));


