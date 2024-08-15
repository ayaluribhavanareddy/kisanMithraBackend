// public/js/app.js

// Function to create a purchase
async function createPurchase(item, quantity) {
    const token = localStorage.getItem('token'); // Token should be saved in local storage after login

    const response = await fetch('http://localhost:3000/purchases', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token // Include the token in the Authorization header
        },
        body: JSON.stringify({ item, quantity })
    });

    if (response.ok) {
        const data = await response.json();
        console.log('Purchase created:', data);
    } else {
        console.error('Failed to create purchase');
    }
}

// Function to handle form submission
document.getElementById('cropForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const item = document.getElementById('cropName').value;
    const quantity = document.getElementById('cropQuantity').value;
    const price = document.getElementById('cropPrice').value;
    const date = document.getElementById('availabilityDate').value;

    await createPurchase(item, quantity, price, date);
});
