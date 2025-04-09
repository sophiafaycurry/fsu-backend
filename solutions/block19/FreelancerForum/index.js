/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

const freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
];

const maxFreelancers = 10;

const randomNames = [
  "Emma",
  "Liam",
  "Olivia",
  "Noah",
  "Ava",
  "Ethan",
  "Isabella",
  "Lucas",
  "Mia",
  "Mason",
];

const randomPrices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const randomOccupations = [
  "Writer",
  "Teacher",
  "Engineer",
  "Doctor",
  "Nurse",
  "Artist",
  "Lawyer",
  "Chef",
  "Salesperson",
  "Developer",
];

// Calculate the average price of freelancers.
const calculateAveragePrice = () => {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  return freelancers.length === 0 ? 0 : total / freelancers.length;
};

// `setInterval` will call `addFreelancer` every 3000 milliseconds (3 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addFreelancerIntervalId)` will stop the interval.
const addFreelancerIntervalId = setInterval(addFreelancer, 3000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the freelancers
  const freelancersId = document.querySelector("#freelancers");
  // Keep header but clear previous table rows
  freelancersId.innerHTML =
    /* html*/
    `<tr>
      <th>Name</th>
      <th>Occupation</th>
      <th>Starting Price</th>
     </tr>`;

  freelancers.forEach((freelancer) => {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.textContent = freelancer.name;

    const tdOccupation = document.createElement("td");
    tdOccupation.textContent = freelancer.occupation;

    const tdPrice = document.createElement("td");
    tdPrice.classList.add("price");
    tdPrice.textContent = `$${freelancer.price}`;

    tr.appendChild(tdName);
    tr.appendChild(tdOccupation);
    tr.appendChild(tdPrice);

    freelancersId.appendChild(tr);

    const average = document.querySelector("#average");
    average.innerHTML = `The average starting price is: $${calculateAveragePrice().toFixed(
      2
    )}`;
  });
}

/**
 * Add a random freelancer to the `freelancers` array
 */
function addFreelancer() {
  const name = randomNames[Math.floor(Math.random() * randomNames.length)];
  const price = randomPrices[Math.floor(Math.random() * randomPrices.length)];
  const occupation =
    randomOccupations[Math.floor(Math.random() * randomOccupations.length)];

  freelancers.push({ name, price, occupation });
  render();

  // Stop adding freelancers if we've reached the maximum number of freelancers
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
}
