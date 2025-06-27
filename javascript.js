function Validate() {
    // Get the name input element
    var nameInput = document.getElementById("name");
    // Get the name value
    var nameValue = nameInput.value.trim();

    var passwordInput = document.getElementById("password");
    var passwordValue = passwordInput.value.trim();


    // Check if the name input value is at least 5 characters long
    if (nameValue.length < 5) {
        alert("Name must be at least 5 characters long");
        // Prevent the form from submitting
        return false;
    }

    if (passwordValue.length < 8) {
        alert("Password must be at least 8 characters long");
        // Prevent the form from submitting
        return false;
    }

    return true;
    window.open("index.html", "_blank");


}