document.addEventListener('DOMContentLoaded', () => {
    const userTypeSelection = document.getElementById('userTypeSelection');
    const landOwnerForm = document.getElementById('landOwnerForm');
    const farmerForm = document.getElementById('farmerForm');
    const landList = document.getElementById('landList');
    const landListUl = document.querySelector('#landList ul');

    // Handle user type selection (landOwner or farmer)
    const userTypeRadios = document.querySelectorAll('input[name="userType"]');
    userTypeRadios.forEach((radio) => {
        radio.addEventListener('change', () => {
            if (radio.value === 'landOwner') {
                landOwnerForm.classList.remove('hidden');
                farmerForm.classList.add('hidden');
            } else {
                landOwnerForm.classList.add('hidden');
                farmerForm.classList.remove('hidden');
            }
        });
    });

    // Handle land owner form submission
    landOwnerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const location = document.getElementById('location').value;
        const acres = document.getElementById('acres').value;
        const expectedAmount = document.getElementById('expectedAmount').value;
        const ownerPhone = document.getElementById('ownerPhone').value;

        // Display the entered data in the land list
        const listItem = document.createElement('li');
        listItem.textContent = `Location: ${location}, Acres: ${acres}, Expected Amount: $${expectedAmount}, Phone: ${ownerPhone}`;
        landListUl.appendChild(listItem);

        // Reset the form and show the land list
        landOwnerForm.reset();
        landList.classList.remove('hidden');
    });

    // Handle farmer form submission
    farmerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const farmerName = document.getElementById('farmerName').value;
        const farmerLocation = document.getElementById('farmerLocation').value;

        // Display the entered farmer information in the land list
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${farmerName}, Land Location: ${farmerLocation}`;
        landListUl.appendChild(listItem);

        // Show the land list
        landList.classList.remove('hidden');
    });

    // Fetch data from the /api/data endpoint
    fetch('/api/data')
        .then(response => response.json())
        .then(data => console.log(data.message))
        .catch(error => console.error('Error fetching /api/data:', error));

    // Fetch data from the /admin/dashboard endpoint with admin header
    fetch('/admin/dashboard', {
        headers: {
            'x-admin': 'true' // Example admin header
        }
    })
    .then(response => response.json())
    .then(data => console.log(data.message))
    .catch(error => console.error('Error fetching /admin/dashboard:', error));
});
