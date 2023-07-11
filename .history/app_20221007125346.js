const app_ID = "17de4b829b485eae9035d18c0247a890";

const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("change", (e) => {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${e.target.value}&limit=2&appid=${app_ID}`
  ).then(async (res) => {
    let lat, lon;
    const data = await res.json();
    lat = data[0].lat;
    lon = data[0].lon;
    console.log(data[0].lat);
  });
});
