// 1. Grab the Input and Button
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");

// 2. Grab the Error Message
const errorContainer = document.getElementById("error-container");
const errorMessage = document.getElementById("error-message");

// 3. Grab the Main Weather Card (to show/hide it)
const weatherCard = document.getElementById("weather-card");

// 4. Grab the Elements you need to update with API data
const cityName = document.getElementById("city-name");
const currentDate = document.getElementById("current-date");
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("weather-description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const feelsLike = document.getElementById("feels-like");

// Example of how you'll use them later:
// weatherCard.classList.remove('hidden'); // Shows the card
// temperature.textContent = `${data.main.temp}°C`; // Updates temp
// weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Updates icon

searchBtn.addEventListener("click", function () {
  let cityValue = cityInput.value.trim();
  if (cityValue === "") {
    errorContainer.classList.remove("hidden");
    errorMessage.textContent = "Please enter a city.";
  } else {
    errorContainer.classList.add("hidden");
    // console.log(cityValue);
    getWeather(cityValue);
  }
});

async function getWeather(city) {
  let recievedcity = city;

  let message = `Weather in ${city}`;
  console.log(message);

  try {
    searchBtn.textContent = "Loading...";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=48fc5de9f1362dfa647aed2adb33742c&units=metric`;

    let response = await fetch(apiUrl);

    if (!response.ok) {
      // throw new Error(`Request failed: ${response.status}`);
      throw new Error("Something Went Wrong!");
    }
    let finalResponse = await response.json();

    weatherCard.classList.remove("hidden");
    errorContainer.classList.add("hidden");

    // City Name
    cityName.textContent = finalResponse.name;

    // Current Date
    const today = new Date();
    currentDate.textContent = today.toLocaleDateString();

    // Temp
    temperature.textContent = `${finalResponse.main.temp}°C`;

    //Feels Like
    feelsLike.textContent = finalResponse.main.feels_like;

    // Humidity
    humidity.textContent = `${finalResponse.main.humidity}%`;

    //Win
    windSpeed.textContent = `${finalResponse.wind.speed}m/s`;

    // Description
    description.textContent = `${finalResponse.weather[0].description}°C`;

    // Icon
    weatherIcon.src = "https://openweathermap.org/img/wn/03d@2x.png";

    searchBtn.textContent = "Search";
  } catch {
    errorContainer.classList.remove("hidden");
    weatherCard.classList.add("hidden");
  } finally {
    searchBtn.textContent = "Search";
  }
}
