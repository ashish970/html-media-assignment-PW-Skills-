//Correct a bug...

// Function to double the quantity of each item in the cart array
function doubleCartQuantity(cart) {
    // Create a new array to store the corrected quantities
    const correctedCart = [];

    // Iterate through each item in the cart
    for (let i = 0; i < cart.length; i++) {
        // Double the quantity of the current item and add it to the corrected cart array
        correctedCart.push(cart[i] * 2);
    }

    // Return the corrected cart array
    return correctedCart;
}
