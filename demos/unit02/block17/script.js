/* CLASSES AND CONTEXT */

const obj = {
  foo: "bar",
  bazz: () => {
    console.log(42);
  },
};
obj.bazz();

// const fruit = {
//   name: "banana",
//   sayHiArrow: () => console.log(`Hi I am a ${this.name}`),
//   sayHiFunction: function () {
//     console.log(`Hi I am a ${this.name}`);
//   },
// };

// fruit.sayHiArrow();
// fruit.sayHiFunction();

/* this keyword
  the JavaScript “this” keyword has a special meaning inside of that object: it refers to itself. 
*/
// const obj1 = {
//   foo: "bar",
//   bazz: function () {
//     console.log("this", this.foo);
//   },
// };
// obj1.bazz();

/* 
  this context is not created with arrow functions
  Arrow functions cannot be used as constructors.
*/
// const obj2 = {
//   foo: "bar",
//   bazz: () => {
//     console.log("this", this.foo);
//   },
// };
// obj2.bazz();

/* classes and instances
  - Date is a class
  - new Dates(s) can be constructed
  - new Dates(s) are instances of the Date class
  - Date is a built-in class in JS
*/
// const date = new Date();
// console.log("current date", date);
// console.log(typeof date);
// console.log(date.toLocaleString());
// console.log("hours", date.getHours());
// date.setHours(date.getHours() + 1);
// console.log("hours +1", date);

/* a simple class */
// class Pet {
//   // Constructor defines properties of a class
//   constructor(type, sound) {
//     this.type = type;
//     this.sound = sound;
//   }
//   // every Pet can call greet()
//   greet() {
//     console.log(`Hi! I am a ${this.type}. The sound I make is ${this.sound}.`);
//   }
// }

/*
  Creates a new Pet to represent a dog
  logs: Hi! I am a dog. The sound I make is woof.
*/
// const dog = new Pet("dog", "woof");
// dog.greet();

/*
  Creates a new Pet to represent a cat 
  logs: Hi! I am a cat. The sound I make is meow.
*/
// const cat = new Pet("cat", "meow");
// cat.greet();

/* class declaration */
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }
// const rhombus = new Rectangle();
// console.log("rhombus", rhombus);

/* class declaration with methods */
// class Person {
//   constructor(name, lastName) {
//     this.name = name;
//     this.lastName = lastName;
//   }
//   introduceSelf() {
//     // class method
//     console.log(`Hi! I'm ${this.name}`);
//   }

//   sayGoodBye() {
//     // class method
//     console.log(`Bye! Nice meeting you!`);
//   }
// }
// const lincoln = new Person("Lincoln");
// lincoln.lastName = "Rescue";
// lincoln.introduceSelf();
// lincoln.sayGoodBye();

// console.log("lincoln", lincoln);

/* 
  Class methods - if you use a method, it will be shared between all instances.
  Creating an instance of a class
*/

// const chase = new Person("Chase");
// chase.introduceSelf();
// console.log("chase", chase);

/* 
  extending a class - inheritance
  class Child extends Parent
*/

// class Square extends Rectangle {
//   constructor(length) {
//     /* Here, it calls the parent class's constructor with lengths provided for the Rectangle's height and width */
//     super(length, length); // super invokes the parent's constructor method

//     /* super() must be called before you can use 'this'. Moving this to the top causes a ReferenceError. */
//     this.name = "Square";
//   }
// }
// const square = new Square(10);
// console.log(square);
