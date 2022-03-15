// Arrau exemple
const personArray = [
    'John',
    'Read',
    2022-1990,
    'programmer',
    ['Michael', 'John', 'Steven']
]

// Objects
const person = {
    firstName: 'John',
    lastName: 'Read',
    age: 2022-1990,
    job: 'programmer',
    friends: ['Michael', 'John', 'Steven']
}
console.log(person);
console.log(`Age: ${person.age}`);
console.log(`Friends by bracks notation: ${person['friends']}`);
console.log(`Friends by dot notation: ${person.friends}`);

const nameKey = 'Name';
console.log(person['first'+nameKey], person['last'+nameKey]);

// const prop = prompt("Choose John's property? ");
// console.log(prop);
// console.log(person[prop]);

console.log('***********************');

//Chalenge:
//John as 3 friends and his best friend is called Michael
console.log(`${person.firstName} has ${person.friends.length} \
    friends and his best friend is called ${person.friends[0]}`);
        
