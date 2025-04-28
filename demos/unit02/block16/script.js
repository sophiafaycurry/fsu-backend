/* ARRAY METHODS - forEach, find, map, filter, reduce, slice */

const arr = [1, 2, 3, 4, 5, 6];

/* Example of a for loop
  We are performing the below action on each of the array's elements
*/
// for (let i = 0; i < arr.length; i++) {
//   let elem = arr[i];
//   console.log(`Current elem value is ${elem}, at index: ${i}`);
// }

/* Array method: forEach
  - forEach is very similar to a standard loop.
  - It performs the callback function on each element in the array
*/
// arr.forEach((num) => {
//   console.log("num", num);
// });

/* forEach with index */
// arr.forEach((num, idx) => {
//   console.log(num, `at index ${idx}`);
// });

/*
  forEach returns nothing - this will always log undefined!
  we are setting the variable result to equal what forEach returns
*/
// const result = arr.forEach((num, idx) => {
//   console.log(num, `index: ${idx}`);
// });
// console.log("result", result);

/* Array method: find
  - find takes a callback function that must return a boolean
  - It returns the first element that meets the condition
  - If no elements meet the condition, it returns undefined.
*/
// const myDogs = ["logan", "chase", "lincoln"];
// const foundItem = myDogs.find((dog) => {
//   return dog === "lincoln";
// });
// console.log(foundItem);

/* Array method: map
  - map is similar to forEach, HOWEVER - it does not manipulate the array in place. 
  - It returns a copy of the array after performing the callback function
*/
// const arrMap = [1, 2, 3, 4, 5, 7, 8, 9, 112, 55];
// const doubled = arrMap.map((num) => {
//   return num * 2;
// });
// console.log("original", arrMap);
// console.log("doubled", doubled);
// console.log("original", arrMap);

/* Array method - filter
  - Returns a subset of original array
  - Does not alter the original array
*/

// const evens = arr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(evens);

/* Array method - slice
  returns a new array based on indexes
*/
// const arrNum = [1, 2, 3, 4, 5, 7];
// const firstAndSecond = arrNum.slice(0, 2);
// console.log(firstAndSecond);

// const thirdAndForth = arrNum.slice(2, 4);
// console.log(thirdAndForth);

// const copy = arrNum.slice();
// console.log(copy);

/* Array method - reduce
  - reduce returns whatever you want it to by iterating and accumulating
  - syntax: reduce(callbackFn, initialValue)
  - callbackFn takes 3 parameters - accumulator, currentValue, index
  - accumulator stores the total (or what's been calculated so far)
  - the initial value parameter can be anything (but the default is 0)
*/

/* an example of what the reduce function is doing */
// function sumTotal(arr, total) {
//   arr.forEach((elem) => (total += elem));
//   return total;
// }
// console.log(sumTotal(arr, 0));

/* sum numbers in array together */
// const initialValue = 0;
// const sum = arr.reduce((acc, num) => {
//   acc += num;
//   return acc;
// }, initialValue);
// console.log("sum", sum);

/* multiply numbers in array together */
// const product = arr.reduce((acc, num) => {
//   acc = acc * num;
//   return acc;
// });
// console.log(product);

/* Split even and odd numbers */
// const initialObj = { evens: [], odds: [] };
// const evensOdds = arr.reduce((acc, num) => {
//   if (num % 2 === 0) {
//     acc.evens.push(num);
//   } else {
//     acc.odds.push(num);
//   }
//   return acc;
// }, initialObj);
// console.log(evensOdds);

/* spread syntax (...) expands an iterable (like an array) into more elements. */
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [arr1, arr2];
// console.log("spread", combined);

/* rest syntax, also (...), is often used to extract only what's needed from an array.
  Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax.
  Spread syntax "expands" an array into its elements, 
  while rest syntax collects multiple elements and "condenses" them into a single element.
*/
// const numbers = [1, 2, 3, 4, 5, 6];
// const [one, two, ...others] = numbers;
// console.log("one", one);
// console.log("two", two);
// console.log("rest", others);

/* indexOf() returns the first index at which a given element can be found in the array,
  or -1 if it is not present. 
*/
// const dogs = ["logan", "chase", "lincoln"];
// console.log(dogs.indexOf("lincoln"));
// console.log(dogs.indexOf("boots"));
