//Inverted right-angleW triangle pattern with asterisks...

// Function to print inverted right-angled triangle pattern
function printInvertedRightAngledTriangle(i) {
    // Iterate through each row
    for (let row = i; row >= 1; row--) {
        // Print asterisks for the current row
        let pattern = '';
        for (let j = 1; j <= row; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
}

// Example usage
const i = 5;
printInvertedRightAngledTriangle(i);


