//Multiple requests...

async function fetchDataFromMultipleAPIs() {
    try {
        // Fetch data from the first API endpoint
        const responseTodo = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        // Check if the response is successful
        if (!responseTodo.ok) {
            throw new Error('Failed to fetch data from the todo API');
        }
        // Parse the JSON response
        const todoData = await responseTodo.json();

        // Fetch data from the second API endpoint
        const responsePost = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        // Check if the response is successful
        if (!responsePost.ok) {
            throw new Error('Failed to fetch data from the post API');
        }
        // Parse the JSON response
        const postData = await responsePost.json();

        // Combine the results into an object
        const combinedData = {
            todo: todoData,
            post: postData
        };

        // Log the combined data object
        console.log('Combined data:', combinedData);
    } catch (error) {
        // Log any errors to the console
        console.error('Error fetching data:', error.message);
    }
}

// Call the fetchDataFromMultipleAPIs function
fetchDataFromMultipleAPIs();
