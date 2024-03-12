//Only unique items are allowed...
function removeDuplicates(arr) {
    // Convert the array to a Set to remove duplicates
    const uniqueSet = new Set(arr);

    // Convert the Set back to an array
    const uniqueArray = Array.from(uniqueSet);

    return uniqueArray;
}


