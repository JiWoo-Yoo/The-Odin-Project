import config from './apikey.js';
const API_KEY = config.apikey;

const city = document.querySelector('#city');
const btn = document.querySelector('#see-weather');

function paintWeather(weatherData, cityName) {
    const weather = document.querySelector('#weather');
    weather.innerHTML = '';

    const country = weatherData.location.country;
    const condition = weatherData.current.condition.text;
    const icon_url = weatherData.current.condition.icon;
    const temperature = weatherData.current.temp_c;

    const position = document.createElement('h2');
    position.textContent = `${cityName} of ${country}: `;

    const condition_text = document.createElement('h1');
    condition_text.textContent = `${condition}`;

    const icon = document.createElement('img');
    icon.src = icon_url;

    const temp = document.createElement('p');
    temp.textContent = `Temperature: ${temperature}°C`;

    weather.appendChild(position);
    weather.appendChild(condition_text);
    weather.appendChild(icon);
    weather.appendChild(temp);
}
async function logJSONData(cityName) {
    if (!cityName) {
        alert('Please enter a city name');
        return;
    }
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`);
        if (!response.ok) {
            console.log(cityName);
            console.log(response);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
 
        const json = await response.json();
        paintWeather(json, cityName);
    } catch (error) {
        console.log(error);
    }
}

btn.addEventListener('click', () => logJSONData(city.value));