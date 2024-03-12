//Capitalize...
// Function to capitalize the first letter of a name if it's lowercase
function capitalizeName(name) {
    // Using the ternary operator to check if the first letter is lowercase
    const modifiedName = name.charAt(0).toLowerCase() === name.charAt(0) ?
        name.charAt(0).toUpperCase() + name.slice(1) : name;

    // Returning the modified or original name
    return modifiedName;
}
