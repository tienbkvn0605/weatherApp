const apiKey = `17de4b829b485eae9035d18c0247a890`;

const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("change", (e) => {
  console.log(e);
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${e.value}&limit={limit}&appid=${apikey}`
  );
});
