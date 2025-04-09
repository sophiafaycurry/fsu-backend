/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
];

const newFreelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
  { name: "Carol", price: 70, occupation: "programmer" },
];

const maxFreelancers = 10;

// `setInterval` will call `addNewFreelancer` every 3000 milliseconds (3 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addFreelancerIntervalId)` will stop the interval.
const addFreelancerIntervalId = setInterval(addNewFreelancer, 3000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  const freelancersList = document.querySelector("#freelancersList");
  freelancersList.innerHTML = "";

  freelancers.forEach((freelancer) => {
    const freelancerDiv = document.createElement("div");
    freelancerDiv.classList.add("freelancer");
    freelancerDiv.innerHTML = `<p>Name: ${freelancer.name}</p>
                               <p>Occupation: ${freelancer.occupation}</p>
                               <p>Starting Price: $${freelancer.price}</p>`;
    freelancersList.appendChild(freelancerDiv);
  });
  calculateAveragePrice();
}

// Calculate the average price of freelancers.
function calculateAveragePrice() {
  const totalPrices = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  const averagePrice = totalPrices / freelancers.length;
  const averagePriceSpan = document.querySelector("#averagePrice");
  averagePriceSpan.textContent = `$${averagePrice.toFixed(2)}`;
}

/**
 * Add a new freelancer to the `freelancers` array
 */
function addNewFreelancer() {
  const freelancer =
    newFreelancers[Math.floor(Math.random() * newFreelancers.length)];

  freelancers.push(freelancer);
  render();

  // Stop adding freelancers if we've reached the maximum number of freelancers
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
}
