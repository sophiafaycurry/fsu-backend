/* ARRAYS
  index (can be used to access values), length property
*/
const arr = ["logan", "chase", "lincoln"];

/* push() adds a value to the end of an array & returns the new array length */
// const pushedArray = [10, 20, 30, 40];
// pushedArray.push(50);
// console.log("element added to end", pushedArray);

/* pop() removes the last element from an array & returns that element */
// const popArray = [10, 20, 30];
// popArray.pop();
// console.log("last element removed", popArray);

/* unshift() adds a value to the beginning of an array & returns the new array length */
// const numbers = [7, 8, 9];
// numbers.unshift(100);
// console.log("element added to start", numbers);

/* shift() removes the first array element & returns that element */
// const number = [10, 20, 30];
// number.shift();
// console.log("first element removed", number);

/* slice() slices out a piece of an array and creates a new array
slice() does not remove any elements from the source array */
// const nums = [1, 2, 3, 4];
// let slicedNumbers = nums.slice(1, 3);
// console.log("slicedNumbers", slicedNumbers);

/* splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place */
// const arrNums = [1, 2, 3];
// let removedNumbers = arrNums.splice(0, 1);
// console.log("arrNums is mutated", arrNums);
// console.log("removedNumbers", removedNumbers);
// arrNums.splice(0, 1, 10, 20);
// console.log(arrNums);

/* split() - split a string into an array */
// const str = "logan,chase,lincoln";
// const array = str.split(",");
// console.log("array from string", array);

/* function which splits strings into arrays */
// function splitIt(str, delim) {
//   return str.split(delim);
// }

// const strToSplit = "logan,chase,lincoln";
// const words = splitIt(strToSplit, ",");
// console.log("split string", words);

// const anotherStrToSplit = "fizz|buzz";
// const otherWords = splitIt(anotherStrToSplit, "|");
// console.log("another split string", otherWords);

/* a function which tells us about an array, indexes (0 to length - 1) */
// const describeArray = (arr) => {
//   console.log(`The length of the array is ${arr.length}`);
//   console.log(`The max index of the array is ${arr.length - 1}`);
//   console.log(`The last element is ${arr[arr.length - 1]}`);
// };
// const infoArray = [1, 3, 5, 7, 9];
// describeArray(infoArray);

/* we can modify an array by assigning a value to an index */
// const modifiedArray = ["logan", "chase", "lincoln"];
// console.log("original array", modifiedArray);
// modifiedArray[0] = 10;
// console.log("modified array", modifiedArray);

/* LOOPS
  we can loop over an array
  for loop (before loop; condition; after iteration )
*/
// const dogs = ["logan", "chase", "lincoln"];
// for (let i = 0; i < dogs.length; i++) {
//   console.log(dogs[i]);
// }

/* we can also use a for...of loop! */
// for (const element of dogs) {
//   console.log(element);
// }

/* we can use a loop to generate an array populating an array with a loop */
// const newArray = [];
// for (let i = 0; i < 25; i++) {
//   newArray.push(i);
// }
// console.log("newArray", newArray);

/* while loop: loops through a block of code as long as a specified condition is met */
// let num = 5;
// while (num < 10) {
//   console.log("our current number is " + num);
//   num++;
// }
// console.log("end of loop");

/* when arrays are passed to functions, they can be modified.. so be careful */
// const modifyArr = (arr) => {
//   return arr.pop();
// };

// const fnModifiedArray = [1, 2, 3, 4, 5, 6];
// console.log("original array", fnModifiedArray);
// console.log("returns removed last element", modifyArr(fnModifiedArray));
// console.log("original array has been mutated", fnModifiedArray);

/* get sum of numbers in an array */
// const numArray = [1, 2, 3, 4, 5, 6];
// let count = 0;
// for (let i = 0; i < numArray.length; i++) {
//   count += numArray[i];
// }
// console.log("count", count);

/* generate an array of odd numbers, use % operator to determine odd or even numbers */
// const oddArray = [];
// for (let i = 0; i < 25; i++) {
//   if (i % 2 === 1) {
//     oddArray.push(i);
//   }
// }
// console.log(oddArray);

/* we can then create a function which generates an array of odd numbers */
// function generateOddArray(limit) {
//   const arr = [];
//   for (let i = 0; i < limit; i++) {
//     if (i % 2 === 1) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// const generatedOddArray = generateOddArray(100);
// console.log(generatedOddArray);

/* function which takes an array of numbers and returns a new array with only the even numbers */
// const onlyEvens = (arr) => {
//   const results = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       results.push(arr[i]);
//     }
//   }
//   return results;
// };
// const onlyEvensArray = [1, 2, 3, 4, 5, 6];
// const evens = onlyEvens(onlyEvensArray);
// console.log("just even numbers", evens);
