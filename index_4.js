//Highest Marks...

// Function to find the highest marks scored by any student in the class
function findHighestMarks(marks) {
    // Using the ternary operator to find the highest marks
    const highestMarks = Math.max(...marks);

    // Displaying the highest marks to the teacher using the console
    console.log("Highest marks scored by any student:", highestMarks);
}

