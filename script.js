function validateRegistration() {
       
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;  
    if (!username || !email || !password || !confirmPassword) {
        document.getElementById("errorMessage").innerHTML = "Please fill in all fields.";
        return;
    }
    if (password !== confirmPassword) {
        document.getElementById("errorMessage").innerHTML = "Passwords do not match.";
        return;
    }
    document.getElementById("errorMessage").style.color = "green";
    document.getElementById("errorMessage").innerHTML = "Registration successful!";
}