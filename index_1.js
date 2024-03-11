//Password Validator- JavaScript assignment.....

// Function to check if passwords match
function checkPasswordMatch(password, confirmPassword) {
    if (password === confirmPassword) {
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful.");
    }
}

// Example usage
const password = "myPassword";
const confirmPassword = "myPassword123";

checkPasswordMatch(password, confirmPassword);
