//Remove Duplicates...
// Function to remove duplicate items from the customer's cart
function removeDuplicates(cart) {
    // Create an empty object to store unique items
    const uniqueCart = {};

    // Iterate through each item in the cart
    cart.forEach(item => {
        // Use the item name as the key in the uniqueCart object
        // If the key already exists, the item is a duplicate and will be skipped
        uniqueCart[item] = true;
    });

    // Extract the unique item names from the keys of the uniqueCart object
    const uniqueItems = Object.keys(uniqueCart);

    // Return the array of unique item names
    return uniqueItems;
}



