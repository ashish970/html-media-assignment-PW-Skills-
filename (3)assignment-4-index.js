//Access random elements...

function extractElements(arr) {
    // Destructure the array into variables representing the first, second, and last elements
    const [first, second, ...rest] = arr;

    // Get the last element from the rest of the array
    const last = rest[rest.length - 1];

    // Return an array with the first, second, and last elements
    return [first, second, last];
}


