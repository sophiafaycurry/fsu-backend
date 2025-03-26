function processOrder() {
  // Retrieve the input value
  let flavorsInput = document.getElementById("flavorsInput").value;

  // Split the input value into an array of flavors
  let flavors = flavorsInput.split(",");

  // Count the quantity of each flavor using an object
  let flavorCount = {};
  for (let i = 0; i < flavors.length; i++) {
    let flavor = flavors[i].trim();
    flavorCount[flavor] === undefined
      ? (flavorCount[flavor] = 1)
      : flavorCount[flavor]++;
  }

  // Build an array of objects, each containing a flavor and quantity, for console.table
  const flavorArray = [];
  for (let flavor in flavorCount) {
    flavorArray.push({ Flavor: flavor, Quantity: flavorCount[flavor] });
  }

  // Display the flavor quantities using console.table
  console.table(flavorArray);
}

processOrder();
