"use strict";
const userName = "Max";
let age = 30;
age = 29;
var result;
function add(a, b) {
    result = a + b;
    return result;
}
console.log(result);
function add2(a, b) {
    let result2;
    result2 = a + b;
    return result2;
}
const add3 = (a, b) => {
    return a + b;
};
console.log(add3(2, 5));
const add4 = (a, b = 1) => a + b;
console.log(add4(2, 5));
const printOutput = (output) => console.log(output);
printOutput(add4(5, 2));
printOutput("Hi!!");
printOutput(add4(5));
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => console.log(event));
}
const hobbies = ["Sports", "Cooking", "Waking", "Swimming"];
console.log(hobbies[0]);
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);
const person = {
    name2: "Max",
    age2: 30,
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
const add5 = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add5(5, 10, 2, 3.7);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log("hobbies: ", hobbies, "구조분해: ", hobby1, hobby2, remainingHobbies);
const { name2, age2 } = person;
//# sourceMappingURL=app.js.map