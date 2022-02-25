const frds = ['Michael','Steven','Peter'];
const yrs = [1970,1975,2002,2006];
frds.push('Paul');
console.log(`1: ${frds}`);
frds.unshift('John');
console.log(`2: ${frds}`);
frds.pop();
console.log(`3: ${frds}`);
console.log(frds.indexOf('John'));
console.log(`4: ${frds}`);
console.log(frds.includes('John'));


