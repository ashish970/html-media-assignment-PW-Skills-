//Error Handling...
fetch('https://jsonplaceholder.typicode.com/posts/123456789')
    .then(response => {
        // Check if the response is successful
        if (!response.ok) {
            // If response is not ok, throw an error
            throw new Error('Failed to fetch data');
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Log the data to the console
        console.log('Fetched data:', data);
    })
    .catch(error => {
        // Log and handle any errors that occur during the fetch operation
        console.error('Error fetching data:', error.message);
        // Display an error message on the webpage
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Failed to fetch data. Please try again later.';
        document.body.appendChild(errorMessage);
    });
