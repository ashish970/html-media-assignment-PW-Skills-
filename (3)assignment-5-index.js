//Min and max values...

function findMaxAndMin(arr) {
    // Use the spread operator to spread the elements of the array as arguments to Math.max() and Math.min()
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    // Return an object with properties max and min
    return { max, min };
}

