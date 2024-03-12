//LinkedIn Profile URL Validator....
// Define the regular expression pattern for valid LinkedIn profile URLs
const linkedinURLPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

// Function to check if a given URL matches the LinkedIn profile URL pattern
function isValidLinkedInURL(url) {
    return linkedinURLPattern.test(url);
}

// Test LinkedIn profile URLs
const urlsToTest = [
    "https://www.linkedin.com/in/johndoe123",
    "https://www.linkedin.com/in/john_doe",
    "https://www.linkedin.com/in/john-doe",
    "https://www.linkedin.com/in/johndoe123/",
    "https://www.linkedin.com/in/johndoe12345",
    "https://www.linkedin.com/in/johndoe1234567890123456789012",
    "https://www.linkedin.com/in/johndoe",
    "https://www.linkedin.com/in/johndoe@",
    "https://www.linkedin.com/johndoe",
    "http://www.linkedin.com/in/johndoe123",
    "https://www.linkedin.com/in/",
    "https://www.linkedin.com/",
];

// Check each URL and print a message indicating if it's a valid LinkedIn profile URL or not
urlsToTest.forEach(url => {
    if (isValidLinkedInURL(url)) {
        console.log(url, "is a valid LinkedIn profile URL.");
    } else {
        console.log(url, "is not a valid LinkedIn profile URL.");
    }
});
