const soilTestForm = document.getElementById("soilTestForm");

soilTestForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    // You can send this data to a server for further processing here

    // For demonstration, show an alert with the submitted information
    alert(`Soil Test Request Submitted:\nName: ${name}\nLocation: ${location}\nPhone Number: ${phoneNumber}`);

    // Redirect to the login page for tracking requests
    window.location.href = "signupsign.html"; // Replace "login.html" with the actual login page URL
});
