function addNumbers(num1, num2) {
    var result;
    console.log("Value of result before assignment:", result);
    result = num1 + num2;
    return result;
}

const sum = addNumbers(3, 4); // This should print "Value of result before assignment: undefined"
console.log("Sum:", sum); // This should print "Sum: 7"
