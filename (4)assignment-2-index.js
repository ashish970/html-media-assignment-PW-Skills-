//String Manipulation...

function manipulateString(str) {
    // Convert the characters to uppercase
    const manipulatedString = str.toUpperCase();

    // Define the callback function
    function logString() {
        // Log the sentence along with the manipulated string to the console
        console.log("The manipulated string is: " + manipulatedString);
    }

    // Return the callback function
    return logString;
}
