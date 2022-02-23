'use strict';
//Function example
function cutFruit(fruit){
    return fruit*4;
}

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and\
    ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(2,3));