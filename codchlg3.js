// From Coding Challenge Part I
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const BMIMark = (massMark / heightMark ** 2).toFixed(2);
// const BMIJohn = (massJohn / heightJohn ** 2).toFixed(2);
// console.log("Mark's BMI:", BMIMark, '\n\
// ',"John's BMI: ", BMIJohn);

// console.log(`Mark's BMI: ${BMIMark};
// John's BMI: ${BMIJohn}`);

const Mark = {
    fullName: 'Mark',
    mass: '78',
    height:1.69,
    calcBMI : function(){
        this.bmi=(this.mass /this.height ** 2).toFixed(2);
        return (this.bmi);
    }
}

const John = {
    fullName: 'John',
    mass: '92',
    height:1.95,
    calcBMI : function(){
        this.bmi=(this.mass /this.height ** 2).toFixed(2);
        return (this.bmi);
    }
}

// console.log("Mark's BMI:", Mark.calcBMI, '\n\
// ',"John's BMI: ", John.calcBMI);
const jbmi=Number(John.calcBMI());
const mbmi=Number(Mark.calcBMI());
console.log(`Mark's BMI: ${Mark.bmi}
John's BMI: ${John.bmi}`);
if (jbmi > mbmi){
    console.log(`John BMI is higher than Mark's`);
} else if (jbmi < mbmi){
    console.log(`Mark BMI is higher than John's`);
}
else console.log(`Equal BMI's`);


