/* An object is a collection of key-value pairs
that can be accessed by key and iterated over. */

const shoes = {
  color: "red",
  size: 10,
  price: 45,
  type: "sneaker",
};

/* Using `.table` is a nice way to see the structure of an object */
console.table(shoes);

/* Dot vs bracket notation */
// console.log("dot notation", shoes.color);
// console.log("bracket notation", shoes["size"]);

/* Modifying an object */
// shoes.price = 60;
// console.log("new shoe price", shoes.price);

/* Iterating over an object */
// console.log("looping over object");
// for (const key in shoes) {
//   console.log(`The shoes ${key} is ${shoes[key]}`);
// }

/* Object methods */
// console.log("Object.keys", Object.keys(shoes));
// console.log("Object.values", Object.values(shoes));
// console.log("Object.entries", Object.entries(shoes));

/* The following material is *not* covered in the slides! */
/* objects can be passed to functions */
// const printObject = (obj) => {
//   console.log("obj passed to function");
//   for (const key in obj) {
//     console.log(`key: ${key}, value: ${obj[key]}`);
//   }
// };

// printObject(shoes);
// shoes.color = "green";
// printObject(shoes);

/* objects can be returned from functions 
    look how we are creating an empty object and adding a key/value pair to it
    this is important for the workshop
  */
// const createSimpleObject = (key, value) => {
//   const obj = {};
//   obj[key] = value;
//   return obj;
// };

// const greyShoes = createSimpleObject("color", "grey");
// console.log("greyShoes", greyShoes);

/* objects can be modified by functions */
// const addRandomValue = (obj, key) => {
//   obj[key] = Math.round(Math.random() * 100);
// };

// addRandomValue(greyShoes, "price");
// console.log("addRandomValue", greyShoes);

/* the values of objects can be arrays */
// const arr = [1, 2, 3, 4, 5, 6];

// const oddsEvens = {
//   odds: [],
//   evens: [],
// };

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     oddsEvens.odds.push(arr[i]);
//   } else {
//     oddsEvens.evens.push(arr[i]);
//   }
// }

// console.log(oddsEvens.odds);
// console.log("oddsEvens", oddsEvens);

/* an array can have objects as elements */
// const cart = [
//   shoes,
//   greyShoes,
//   {
//     color: "blue",
//     size: 12,
//     price: 100,
//   },
// ];

// console.log("cart", cart);
// console.log("cart[0]", cart[0].type);

/* JSON (parsing and printing) */
// const obj = { foo: "bar", bazz: 42, quq: true };

// const str = JSON.stringify(obj);
// console.log("str", str);
// console.log(typeof str);

// const obj2 = JSON.parse('{"foo": "bar", "bazz": 42, "quq": true}');

// console.log("obj2", obj2);
// console.log(typeof obj2);
