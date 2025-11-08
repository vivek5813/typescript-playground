// const userName = 'Max';
// userName = 'vivek';

// let age = 30;
// age = 29;

// if (age > 20) {
//     let isOld = true;
// }

// console.log(isOld);

// ARROW FUNTION
const add = (a: number, b: number) => a + b;

console.log(add(2, 5));
const printOutput = (output: string | number) => console.log(output);

const printOutput2: (a  : number | string) => void = output => console.log(output);

printOutput(add(5,2));

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}

// DEFAULT ARGUMENTS

const add2 = (a: number, b: number = 1) => a + b;

const hobbies = ['Sport', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(hobbies[0]);

// spread operator ...
activeHobbies.push(...hobbies);

const person = {
    firstName: 'Max',
    age: 30
}

const copiedPerson = {...person}; 

// Rest Params
const add3 = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}

const addedNumbers = add3(5, 10, 2, 2.5);
console.log(addedNumbers);

//Array destructuring

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

// pulling values  from object using key names
const {firstName, age} = person;

const {firstName: userName, age: copiedAge} = person;

console.log('hi');