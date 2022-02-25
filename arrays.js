const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

//Arrays
const friends = ['Michael','Steven','Peter'];
console.log(friends);

const years = new Array(1991, 1999, 2010);

console.log(years[2]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-2]);

friends[2]='Jane';
console.log(friends);

const cd = ['Charly', 'Den', 40, friends];
console.log(cd);

//Exerc

const calcAge = birthYear => 2050 - birthYear;
const y = [1970,1975,2002,2006];
const res =[];
for (let i = 0; i < y.length; i++) {

    res[i]=calcAge(y[i]);
}
console.log(`Years: ${y}`);
console.log(`Ages: ${res}`);

