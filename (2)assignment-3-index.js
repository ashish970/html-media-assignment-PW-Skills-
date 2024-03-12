//Build a feature for Store's Inventory....
// Object containing items and their prices in USD
let pricesInUSD = {
    "item1": 10,
    "item2": 20,
    "item3": 30
};

// Function to convert prices from USD to INR
function convertToINR(priceUSD) {
    const exchangeRate = 80;
    return priceUSD * exchangeRate;
}

// Use the map function to create a new object with prices converted to INR
let pricesInINR = Object.fromEntries(
    Object.entries(pricesInUSD).map(([item, priceUSD]) => [item, convertToINR(priceUSD)])
);

// Output the object with prices converted to INR
console.log("Prices in INR:", pricesInINR);
