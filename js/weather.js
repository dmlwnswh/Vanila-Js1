const API_KEY = 'da97d1650ce9b821bf1fed0faee132c7';


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric
    `;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        const weather = document.querySelector('#weather span:last-child');
        const city = document.querySelector('#weather span:first-child');
        city.innerText = data.name;
        weather.innerText = `/${data.weather[0].main}/${data.main.temp}℃`;  //fetch is promise(작동하는데 takes time)
});
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);