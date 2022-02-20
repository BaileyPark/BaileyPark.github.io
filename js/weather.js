const API_KEY = "efe2c77d15567a360c85574ed144810b";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(Response => Response.json()).then(data => {
        const weather = document.querySelector("#weather span");
        const main = data.weather[0].main;
        weather.innerText = `${main}한 날씨`;
    });
}
  
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);