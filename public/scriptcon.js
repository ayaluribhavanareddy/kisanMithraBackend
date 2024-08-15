const messageForm = document.getElementById("messageForm");

messageForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here, you can send the message data to a server for further processing

    // For demonstration, show an alert with the submitted information
    alert(`Message Sent:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    
    // Clear the form fields after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});
