//Reverse String...
// Define the input string
let input = "Hello, world!";

// Function to reverse the string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Delay the execution of reversing the string by 2 seconds
setTimeout(function() {
    // Reverse the input string
    let reversedString = reverseString(input);
    // Print the reversed string
    console.log("Reversed string:", reversedString);
}, 2000); // 2000 milliseconds = 2 seconds
