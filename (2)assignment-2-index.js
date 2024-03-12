//Random Number Generator with Delay and Progress Indication...
// Define the delay in milliseconds
let delay = 3000; // 3 seconds

// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
}

// Function to display countdown messages
function displayCountdown(timeRemaining) {
    console.log("Time remaining:", timeRemaining, "seconds");
}

// Delay the generation of the random number by 'delay' milliseconds
let timer = setTimeout(function() {
    // Generate the random number
    let randomNumber = generateRandomNumber();
    // Output the random number
    console.log("Random number generated:", randomNumber);
    // Clear the timer
    clearTimeout(timer);
}, delay);

// Display countdown messages every second until the random number is generated
let countdownTimer = setInterval(function() {
    // Decrease the time remaining by 1 second
    delay -= 1000; // Subtract 1000 milliseconds (1 second)
    // Display the time remaining
    displayCountdown(delay / 1000); // Convert milliseconds to seconds
    // Check if the countdown is finished
    if (delay <= 0) {
        // Clear the countdown timer
        clearInterval(countdownTimer);
    }
}, 1000); // Display the countdown every second
