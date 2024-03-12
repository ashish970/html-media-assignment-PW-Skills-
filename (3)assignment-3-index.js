//Swap the values...
function swapVariables(x, y) {
    // Destructure the variables into an array and swap their positions
    [x, y] = [y, x];

    // Return an array with the swapped values
    return [x, y];
}

// Example usage:
let x = 5;
let y = 10;
const result = swapVariables(x, y);
console.log(result); // Output: [10, 5]
