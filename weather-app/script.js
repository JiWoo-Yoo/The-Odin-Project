import config from './apikey.js';
const API_KEY = config.apikey;

const latitude = document.querySelector('#latitude');
const longitude = document.querySelector('#longitude');
const btn = document.querySelector('#see-weather');

async function logJSONData(lat, long) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${long}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}
const lat_arg = Number(latitude.value);
const lon_arg = Number(longitude.value);

btn.addEventListener('click', () => logJSONData(lat_arg), lon_arg);