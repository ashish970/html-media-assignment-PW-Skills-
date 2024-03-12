//URL validation....

// Define the regular expression pattern for valid URLs
const urlPattern = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;

// Function to check if a given string matches the URL pattern
function isValidURL(url) {
    return urlPattern.test(url);
}

// Test URLs
const urlsToTest = [
    "https://www.example.com",
    "http://subdomain.example.com",
    "https://123.example.com",
    "https://example.com",
    "ftp://example.com",
    "https://example",
    "https://example.",
    "https://.com"
];

// Check each URL and print a message indicating if it matches the conditions or not
urlsToTest.forEach(url => {
    if (isValidURL(url)) {
        console.log(url, "is a valid URL.");
    } else {
        console.log(url, "is not a valid URL.");
    }
});
