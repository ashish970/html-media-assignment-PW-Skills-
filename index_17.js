//Build a banking application...
// Object representing a customer account
const customerAccount = {
    name: "John Doe",
    balance: 1000,
};

// Function to deposit money into the account
const deposit = (amount) => {
    customerAccount.balance += amount;
    console.log(`Deposit of ${amount} successfully made.`);
};

// Function to withdraw money from the account
const withdraw = (amount) => {
    if (amount <= customerAccount.balance) {
        customerAccount.balance -= amount;
        console.log(`Withdrawal of ${amount} successfully made.`);
    } else {
        console.log("Insufficient funds.");
    }
};

