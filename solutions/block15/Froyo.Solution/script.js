let flavors = prompt("Please enter a list of comma-separated froyo flavors.");

// split flavors string into an array
flavors = flavors.split(",");

const countFlavors = (arr) => {
  // create empty obj
  const count = {};

  // loop through all flavors
  for (let flavor of arr) {
    // trim whitespace
    flavor = flavor.trim();
    /* 
      tenerary to check if flavor is a key in obj 
      if flavor already exists, increase count by 1
      if flavor does not exist, create flavor key and set value to 1
    */
    flavor in count ? (count[flavor] += 1) : (count[flavor] = 1);
  }
  return count;
};

console.table(countFlavors(flavors));
