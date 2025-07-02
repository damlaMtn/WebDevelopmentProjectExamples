function fetchDataWithCallback(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
        } else {
            callback('Error fetching data', null);
        }
    };    
    xhr.send();
}

function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
        
        xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject('Error fetching data');
            }
        };        
        xhr.send();
    });
}

async function fetchDataAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        if(!response.ok) {
            throw new Error(`Status: ${response.json}`);
        }
        const container = document.getElementById('data-container');
        container.innerHTML = data
        .map(user => `<p>${user.name} - ${user.email}</p>`)
        .join('');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

//Test the callback function
fetchDataWithCallback((error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
});

//Test the promise-based function
fetchDataWithPromise()
    .then(data => console.log(data))
    .catch(error => console.error(error));


//Test the async/await function
//fetchDataAsync();

//Fetch data when the button is clicked
document.getElementById('fetch-data').addEventListener('click', fetchDataAsync);
