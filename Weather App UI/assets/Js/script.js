var container = document.querySelector('.container')
var search = document.querySelector('.search-box .button')
var weatherBox = document.querySelector('.weather-box')
var weatherDetails = document.querySelector('.weather-details')


// Function to get weather information based on coordinates
function getWeatherInfo(latitude, longitude) {
    // You can make an API request to fetch weather data here
    // For simplicity, let's assume you have an API endpoint /weather
    // Replace this with your actual API endpoint
    fetch(`/weather?lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then(data => {
            // Display weather information on the page
            displayWeatherInfo(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// Function to display weather information on the page
function displayWeatherInfo(weatherData) {
    const weatherInfoContainer = document.getElementById('weather-info');
    // You can customize how you want to display the weather information
    weatherInfoContainer.innerHTML = `
        <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
        <p>Temperature: ${weatherData.main.temp} &#8451;</p>
        <p>Condition: ${weatherData.weather[0].description}</p>
    `;
}

// Function to get current location coordinates
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                // Get weather information based on coordinates
                getWeatherInfo(latitude, longitude);
            },
            error => {
                console.error('Error getting current location:', error);
            }
        );
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}
