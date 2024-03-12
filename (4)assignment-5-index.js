//Greeting Promise...

function greetWithName(name) {
    return new Promise((resolve, reject) => {
        // Check if the input is valid
        if (typeof name !== 'string') {
            reject(new Error('Input must be a string'));
        } else {
            // Resolve the Promise with the greeting message
            resolve(`Hello, ${name}!`);
        }
    });
}
