//Count the occurrences...
function wordCount(inputString) {
    // Split the input string into individual words
    const words = inputString.split(" ");

    // Initialize an empty map to store word counts
    const wordMap = new Map();

    // Iterate over each word
    words.forEach(word => {
        // If the word already exists in the map, increment its count
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        } else {
            // If the word does not exist in the map, add it with a count of 1
            wordMap.set(word, 1);
        }
    });

    return wordMap;
}


