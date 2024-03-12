//Calculate the final order price...

// Arrow function to calculate the total cost of items in the cart
const calculateTotalCost = (cart) => {
    // Initialize total cost
    let totalCost = 0;

    // Iterate through each item in the cart
    cart.forEach(item => {
        // Calculate the cost of each item (unit price * quantity) and add it to the total cost
        totalCost += item.unitPrice * item.quantity;
    });

    // Return the total cost
    return totalCost;
};

