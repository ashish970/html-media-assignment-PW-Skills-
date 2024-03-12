//Arrange in alphabetical order...
function printBookTitles(books, callback) {
    // Extract titles from the list of books
    const titles = books.map(book => book.title);

    // Sort the titles alphabetically
    const sortedTitles = titles.sort();

    // Pass the sorted titles to the callback function
    callback(sortedTitles);
}

// Example list of books
const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 }
];
