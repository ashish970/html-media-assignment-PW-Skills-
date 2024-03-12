//Filtering and Capitalizing: Books Published After 2010 with Author Names....

// Input list of books
let books = [
    { title: "Book 1", author: "author 1", year: 2005 },
    { title: "Book 2", author: "author 2", year: 2012 },
    { title: "Book 3", author: "author 3", year: 2008 },
    { title: "Book 4", author: "author 4", year: 2015 }
];

// Function to capitalize the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Filter out books published before 2010 and capitalize author names
let filteredBooks = books
    .filter(book => book.year >= 2010) // Filter out books published before 2010
    .map(book => ({ // Capitalize author names
        title: book.title,
        author: capitalize(book.author),
        year: book.year
    }));

// Output the filtered and capitalized books
console.log("Filtered Books:", filteredBooks);
