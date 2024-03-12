// Calculate rental cost...
// Function to calculate rental cost based on days rented and car type
function calculateRentalCost(daysRented, carType) {
    let rentalCostPerDay;

    // Determine the rental cost per day based on the car type
    switch (carType.toLowerCase()) {
        case 'economy':
            rentalCostPerDay = 4000;
            break;
        case 'midsize':
            rentalCostPerDay = 15000;
            break;
        case 'luxury':
            rentalCostPerDay = 20000;
            break;
        default:
            return "Invalid car type"; // Return if the car type is not recognized
    }

    // Calculate the total rental cost by multiplying the rental cost per day by the number of days rented
    const totalRentalCost = rentalCostPerDay * daysRented;

    // Return the total rental cost
    return totalRentalCost;
}

