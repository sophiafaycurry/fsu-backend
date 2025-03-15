/* statements (building blocks) */
// console.log("logan and chase");

/* conditionals (allow branching of logic) */
// const dog = "lincoln";
// if (dog === "lincoln") {
//   console.log("yes, lincoln is a dog");
// }

/* functions (allow reusability of groups of statements) */
// function sayHello() {
//   console.log("hello");
// }
// sayHello();
// sayHello();

/* a function can return values */
// function aFunction() {
//   const dog = "lincoln";
//   return dog;
// }
// console.log(aFunction());

/* a function can accept values - parameters */
// function myFunction(str) {
//   console.log(str);
// }
// myFunction("lincoln rocks");

/* a function can accept multiple parameters (separated by commas) */
// function addition(a, b) {
//   return a + b;
// }

// const addition = (a, b) => a + b;
// const sum = addition(3, 4);
// console.log(sum);

/* the prompt function lets us get user input as a string */
// const value = prompt("enter a value");
// console.log(typeof value);
// console.log(value);

/* DEMO get a value from the user (*1 create number from a string) */
// function addTen(num) {
//   return num + 10;
// }
// const num = parseInt(prompt("enter a number"));
// console.log(typeof num);

// console.log(addTen(num));

/* DEMO generate a random number between 1 and 3
  Math object (has methods random and ceil) */
// function rnd() {
//   let num = Math.random() * 2;
//   num = Math.ceil(num);
//   console.log(num);
//   return num;
// }
// console.log(rnd());

/* DEMO generate a random number between 1 and another value */
// function random(limit) {
//   let num = Math.random() * limit;
//   num = Math.ceil(num);
//   return num;
// }
// console.log(random(10));
// console.log(random(100));

/* DEMO generate a random number between 1 and user supplied value */
// function rndPrompt(limit) {
//   let num = Math.random() * limit;
//   x = Math.ceil(num);
//   return x;
// }
// const limit = prompt("enter a number");
// console.log(rndPrompt(limit * 1));

/* DEMO create headsTails function
  ternary operator */
// function headsTails() {
//   const x = Math.round(Math.random());
//   console.log(x);
//   // if (x === 0) {
//   //   return "heads";
//   // } else {
//   //   return "tails";
//   // }
//   return x === 0 ? "heads" : "tails";
// }
// console.log(headsTails());

/* DEMO headsTails with a user guess */
// function headsTailsPrompt() {
//   const x = Math.round(Math.random());
//   if (x === 0) {
//     return "heads";
//   } else {
//     return "tails";
//   }
// }
// const guess = prompt("guess heads or tails");
// const result = headsTailsPrompt();
// guess === result
//   ? console.log("correct")
//   : console.log(`nope it was ${result}`);

/* DEMO connect with dashes - Template literals (formatting of strings) */
// function connectWithDashes(str) {
//   return `${str}-${str}`;
// }
// const str = connectWithDashes("hello");
// console.log(str);

// /* DEMO get value from the user to connect with dashes */
// function connectWithDashesPrompt(str) {
//   return `${str}-${str}`;
// }

// const string = prompt("give me a value, I will connect it with dashes");
// const connected = connectWithDashesPrompt(string);
// console.log(connected);

// let dog = "lincoln";
// console.log("dog name", dog);

// function myFunction() {
//   dog = "chase";
//   console.log("function", dog);
// }

// console.log("new variable", dog);

// calling function - console.log the dog from function
// myFunction();
