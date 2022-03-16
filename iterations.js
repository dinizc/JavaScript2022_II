// Iterations / loops
// Example 1
for (let i = 1; i < 4; i++) {
    console.log(`Lifting weights rep ${i} 🏋️`);
}

// Example 2
const personArray = [
    'John',
    'Read',
    2022-1990,
    'programmer',
    ['Michael', 'John', 'Steven'],
    true
]

let typeArray = []
for (let i = 0; i < personArray.length; i++) {
    console.log(personArray[i], typeof personArray[i]);
    // typeArray[i]=typeof personArray[i]; //1st example
    typeArray.push(typeof personArray[i]); // 2nd example (preferable)
}

console.log(typeArray);
console.log('--------------------------------');
// Example 3
const birthYears = [1970, 2001, 1968, 2004];
const age=[];
for (let i = 0; i < birthYears.length ;i++){
    age.push(new Date().getFullYear() - birthYears[i]);
    
}
console.log(age);

console.log('--------------------------------');

// Example 4 - Continue and break down

for (let i = 0; i < typeArray.length; i++){
    if (typeArray[i]==="string"){
        continue;
    }
    console.log(typeArray[i]);
}
console.log('--------------------------------');
for (let i=0 ; i < personArray.length ; i++){
    if (typeof personArray[i]==='number'){
        break;
    }
    console.log(personArray[i], typeof personArray[i]);
}


