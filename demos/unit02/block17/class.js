class Pet {
  // Constructor defines properties of a class
  constructor(type, sound) {
    this.type = type;
    this.sound = sound;
  }
  // every Pet can call greet()
  greet() {
    console.log(`Hi! I am a ${this.type}. The sound I make is ${this.sound}.`);
  }
}

class Dog extends Pet {
  constructor(type, sound, name) {
    super(type, sound);
    /*
      super invokes the parent's constructor method
      super() must be called before you can use 'this'
    */
    this.name = name;
  }
}
const logan = new Dog("dog", "woof", "logan");
console.log(logan);
