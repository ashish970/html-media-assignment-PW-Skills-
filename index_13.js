//Bill splitter...

// Function to calculate total bill and bill per person
function calculateBillPerPerson(costPerDish, numberOfPeople) {
    // Calculate total bill
    const totalBill = costPerDish * numberOfPeople;

    // Calculate bill per person
    const billPerPerson = totalBill / numberOfPeople;

    // Return an object containing total bill and bill per person
    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}
