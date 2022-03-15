// Objects
const person = {
    firstName: 'John',
    lastName: 'Read',
    birthYear: 1980,
    job: 'programmer',
    friends: ['Michael', 'John', 'Steven'],
    hasDriverLicense: false,

    
    calcAge: function(){
        this.age = Number(new Date().getFullYear() - this.birthYear);
    },
    
    personSummary: function() {
        this.summary=person.firstName + " is a " + person.age 
    + " year old teacher";
        if (this.hasDriverLicense) {
            this.summary += " and has a drivers's license"
        }
        return this.summary;
    },
    // age: () => {new Date().getFullYear() - this.birthYear},
    // calcAge: () => {
    //     new Date().getFullYear() - this.birthYear;
    // }
};

person.calcAge();
console.log(person.personSummary());




