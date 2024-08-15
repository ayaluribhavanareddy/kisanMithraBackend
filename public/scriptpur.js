// Sample data (replace with your actual data)
const crops = [
    {
        name: "Wheat",
        farmer: "John Doe",
        price: 10,
        availableQuantity: 100,
        availabilityDate: "2023-10-01",
    },
    {
        name: "Tomato",
        farmer: "Jane Smith",
        price: 5,
        availableQuantity: 50,
        availabilityDate: "2023-09-15",
    },
    {
        name: "MIRCHI",
        farmer: " Smith",
        price: 5,
        availableQuantity: 100,
        availabilityDate: "2023-01-15",
    }
    // Add more crop data here
];

const content = document.getElementById("content");
const loginFarmerButton = document.getElementById("loginFarmer");
const loginCustomerButton = document.getElementById("loginCustomer");

// Handle farmer login
loginFarmerButton.addEventListener("click", () => {
    content.innerHTML = "<h2>Welcome, Farmer!</h2>";
// Handle farmer login
loginFarmerButton.addEventListener("click", () => {
    content.innerHTML = "<h2>Welcome, Farmer!</h2>";

    // Display the crop entry form
   // const farmerForm = document.getElementById("farmerForm");
    farmerForm.style.display = "none";
    const farmerForm = `
    <div id="farmerForm">
        <h3>Enter Crop Information</h3>
        <form id="cropForm">
            <label for="cropName">Crop Name:</label>
            <input type="text" id="cropName" required><br>

            <label for="cropQuantity">Available Quantity (kg):</label>
            <input type="number" id="cropQuantity" required><br>

            <label for="cropPrice">Price per kg ($):</label>
            <input type="number" id="cropPrice" required><br>

            <label for="availabilityDate">Availability Date:</label>
            <input type="date" id="availabilityDate" required><br>

            <button type="submit">Submit</button>
        </form>
    </div>
`;
content.innerHTML += farmerForm;
    // Handle form submission
    const cropForm = document.getElementById("cropForm");
    cropForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the form from submitting

        // Get input values
        const cropName = document.getElementById("cropName").value;
        const cropQuantity = document.getElementById("cropQuantity").value;
        const cropPrice = document.getElementById("cropPrice").value;
        const availabilityDate = document.getElementById("availabilityDate").value;

        // You can now use these values to store crop information or send it to a server
        // For simplicity, we'll just display the entered information for demonstration
        const cropInfo = document.createElement("div");
        cropInfo.innerHTML = `
            <h3>Crop Information Entered:</h3>
            <p>Crop Name: ${cropName}</p>
            <p>Available Quantity: ${cropQuantity} kg</p>
            <p>Price per kg: ${cropPrice}</p>
            <p>Expected Availability Date: ${availabilityDate}</p>
        `;
        content.appendChild(cropInfo);
    });
});

    // Here, you can provide a form for the farmer to add crop listings, set prices, etc.
    // You can also display the farmer's existing crop listings.
});

// Handle customer login
loginCustomerButton.addEventListener("click", () => {
    content.innerHTML = "<h2>Welcome, Customer!</h2>";

    // Display crop listings for customers
    crops.forEach((crop) => {
        const cropDiv = document.createElement("div");
        cropDiv.classList.add("crop");

        const cropName = document.createElement("h3");
        cropName.textContent = crop.name;

        const farmerName = document.createElement("p");
        farmerName.textContent = `Farmer: ${crop.farmer}`;

        const price = document.createElement("p");
        price.textContent = `Price: RS.${crop.price}`;

        const availability = document.createElement("p");
        availability.textContent = `Available Quantity: ${crop.availableQuantity}`;

        const availabilityDate = document.createElement("p");
        availabilityDate.textContent = `Available From: ${crop.availabilityDate}`;

        const prebookButton = document.createElement("button");
        prebookButton.textContent = "Prebook";
        // Implement prebooking functionality here

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        // Implement cart functionality here

        const addToWishlistButton = document.createElement("button");
        addToWishlistButton.textContent = "Add to Wishlist";
        // Implement wishlist functionality here

        cropDiv.appendChild(cropName);
        cropDiv.appendChild(farmerName);
        cropDiv.appendChild(price);
        cropDiv.appendChild(availability);
        cropDiv.appendChild(availabilityDate);
        cropDiv.appendChild(prebookButton);
        cropDiv.appendChild(addToCartButton);
        cropDiv.appendChild(addToWishlistButton);

        content.appendChild(cropDiv);
    });
});
