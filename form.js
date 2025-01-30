
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        
        if (username === "") {
            alert("Username cannot be empty");
            return;
        }
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email");
            return;
        }
        
        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }
        
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        
        alert("Form is submitted successfully");
        document.getElementById("myForm").reset();
    });
});

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
