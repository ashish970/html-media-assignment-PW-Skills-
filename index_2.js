//Calculator in js...
function calculator(num1, num2, operator) {
    let result;

    // Using a switch statement to perform the operation based on the operator
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            return; // Exit the function if the operator is invalid
    }

    // Log the result to the console
    console.log("Result:", result);
}

