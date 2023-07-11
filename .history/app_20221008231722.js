const app_ID = "17de4b829b485eae9035d18c0247a890";

const searchInput = document.querySelector("#search-input");
const cityName = document.querySelector(".city-name");
const temperature = document.querySelector(".temperature");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const windSpeed = document.querySelector(".wind-speed");
const sunrise = document.querySelector(".sunrise");
const sundown = document.querySelector(".sundown");
const DEFAUL_VALUE = "--";
let lat, lon;

searchInput.addEventListener("change", (e) => {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${e.target.value}&limit=1&appid=${app_ID}`
  ).then(async (res) => {
    const data = await res.json();
    lat = data[0].lat.toFixed(2);
    lon = data[0].lon.toFixed(2);
    getTemperration();
  });
});
function getTemperration() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${app_ID}&units=metric&lang=vi`
  ).then(async (res) => {
    const resual = await res.json();
    console.log(resual);
    cityName.textContent = resual.name || DEFAUL_VALUE;
    temperature.textContent = parseInt(resual.main.temp) || DEFAUL_VALUE;
    weatherState.textContent = resual.weather[0].description || DEFAUL_VALUE;
    weatherIcon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${resual.weather[0].icon}@2x.png`
    ) || DEFAUL_VALUE;
    windSpeed.textContent = resual.wind.speed || DEFAUL_VALUE;
    sunrise.textContent =
      moment.unix(resual.sys.sunrise).format("H:mm") || DEFAUL_VALUE;
    sundown.textContent =
      moment.unix(resual.sys.sunset).format("H:mm") || DEFAUL_VALUE;
    }
    );
  .catch ((err) => {
    console.log("erro");
  }
    
  )
}
