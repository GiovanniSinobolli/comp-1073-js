/* STEP 1: Declare variables
Use a-z, 0-9, A-Z and underscores, avoiding reserved names
All program variables are generally declared at the beginning */
let myName;
let myAge;

/* STEP 2: Initialize variables
Don't confuse a variable with no value with one that doesn't exist at all */
myName = "Giovanni";
myAge = 19;

/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */
myName = "sinotrembala";
myAge = 20;

// STEP 4: Variable types (use typeof in the console)
// Numbers
let numCars = 5;

// Strings (use '' or "" or ``)
let manufacturer = "Honda";
let carYear = 2021;
console.log(`my car is a ${carYear} ${manufacturer}`);

// Booleans
let isCarCool = true;

// Arrays
let carList = ["honda", "toyota", "ford"];

console.log(`${carList[1]}`);

let mixedArray = ["Scott", 53, "teacher", true];

// Objects
let myDog = {
    name: "Rugus",
    breed: "Bodercollin",
    size: "big af",
    age: 3,
    goodDog: true
};

console.log(myDog.name);

// STEP 5: Typing (JavaScript is a loosely-typed language)