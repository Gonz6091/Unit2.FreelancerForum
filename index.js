/**
`document.querySelector` is correctly used to select existing DOM elements.

The program initializes an array of possible names and an array of possible occupations.

This criterion is linked to a Learning OutcomeState
The program initializes an array of at least two freelancers with names, occupations, and starting prices.

This criterion is linked to a Learning OutcomeFunctionality
The initial array of freelancers is rendered onto the page.

This criterion is linked to a Learning OutcomeFunctionality
A function is written that correctly calculates the average starting price of the freelancers array.

This criterion is linked to a Learning OutcomeDOM
The DOM is updated to reflect the average starting price.

This criterion is linked to a Learning OutcomeFunctionality
A function is written that generates a freelancer with a random name, occupation, and starting price. This object is pushed into the freelancers array.

This criterion is linked to a Learning OutcomeFunctionality
An interval is set to add a freelancer and rerender every few seconds.

 */ 

const freelancers = [
    {name: "Alice",occupation: "Writer", price: 30},
    {name: "Bob", occupation: "Teacher", price: 50}
]

const tableBody = document.querySelector("#freelancer-table");
const avgPriceDisplay = document.querySelector("#average-price");

function renderFreelancers() {
    tableBody.innerHTML = "";
    freelancers.forEach(freelancer => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${freelancer.name}</td>
            <td>${freelancer.occupation}</td>
            <td>$${freelancer.price}</td>
        `;
        tableBody.appendChild(row);
    });
}

function updateAvgPrice() {
    const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const avgPrice = (totalPrice / freelancers.length).toFixed(2);
    avgPriceDisplay.textContent = `Average Price: $${avgPrice}`;
}

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const occupations = ["Writer", "Teacher", "Designer", "Developer", "Artist"];

function addRandomFreelancer() {
   const randomName = names[Math.floor(Math.random() * names.length)];
   const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
   const randomPrice = Math.floor(Math.random() * 100) + 1;
    freelancers.push({name: randomName, occupation: randomOccupation, price: randomPrice});

   renderFreelancers();
    updateAvgPrice();
}

setInterval(addRandomFreelancer, 5000);
renderFreelancers();
updateAvgPrice();

