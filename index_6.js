//Vowel Counter...
// Function to count the number of vowels in a name
function countVowels(name) {
    // Initialize a variable to store the count of vowels
    let vowelCount = 0;

    // Convert the name to lowercase to handle both lowercase and uppercase vowels
    name = name.toLowerCase();

    // Iterate through each character in the name
    for (let i = 0; i < name.length; i++) {
        // Check if the current character is a vowel
        if (['a', 'e', 'i', 'o', 'u'].includes(name[i])) {
            // Increment the vowel count if the character is a vowel
            vowelCount++;
        }
    }

    // Return the count of vowels
    return vowelCount;
}

