function fetchData() {
    const url = 'https://data.sfgov.org/resource/rqzj-sfat.json';

    const options = {
        method: 'GET',
        headers: {
            'X-App-Token': '$sf_db_app_token',
        },
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            // Handle the API response data
            console.log(data);
            const jsonResponse = data;
            const fs = require('fs');

            // Convert the JSON object to a string
            const jsonData = JSON.stringify(jsonResponse, null, 2); // null and 2 are for formatting the JSON

            // Specify the file path and name where you want to save the JSON file
            const filePath = '\data.json';

            // Write the JSON data to the file
            fs.writeFile(filePath, jsonData, 'utf8', (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('JSON data has been saved to file!');
                }
            });
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error(error);
        });
}

