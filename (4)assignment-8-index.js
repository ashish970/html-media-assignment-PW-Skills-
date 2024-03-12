//Get Data from API and Display it on the browser console...
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        // Check if the response is successful
        if (!response.ok) {
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
        // Log any errors to the console
        console.error('Error fetching data:', error.message);
    });

