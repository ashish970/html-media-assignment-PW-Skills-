//Double using callback...
function doubleArray(arr, callback) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    // Create a new array to store the doubled elements
    const doubledArray = [];

    // Iterate over each element in the input array
    for (let i = 0; i < arr.length; i++) {
        // Double the current element using the callback function
        const doubledValue = callback(arr[i]);
        // Add the doubled value to the new array
        doubledArray.push(doubledValue);
    }

    // Return the new array with doubled elements
    return doubledArray;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const doubledArray = doubleArray(inputArray, function(num) {
    return num * 2;
});

console.log(doubledArray); // Output: [2, 4, 6, 8, 10]
