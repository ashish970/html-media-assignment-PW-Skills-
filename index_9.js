//Check for visibility...

// Function to print numbers divisible by 3 but not by 2
function printNumbersDivisibleBy3NotBy2(numbers) {
    // Iterate through each number in the array
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        // Check if the number is divisible by 3 but not by 2
        if (num % 3 === 0 && num % 2 !== 0) {
            console.log(num);
        } else {
            // Skip to the next iteration if the condition is not met
            continue;
        }
    }
}

