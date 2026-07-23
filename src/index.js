import "./styles.css";
import { renderWeather, displayError } from "./render.js";
import { getWeatherRequest } from "./weather-api.js";

let currentWeather = null;
let useFahrenheit = true;

const form = document.querySelector("form");
const unitToggle = document.getElementById("unit-toggle");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const location = document.getElementById("search-bar").value;
  console.log("Searching for: ", location);

  try {
    const currentWeather = await getWeatherRequest(location);
    renderWeather(currentWeather, useFahrenheit);
  } catch (error) {
    console.log(error);
    displayError("Couldn't find weather for that location");
  }
});

unitToggle.addEventListener("change", () => {
  useFahrenheit = unitToggle.ariaChecked;
  if (currentWeather) {
    renderWeather(currentWeather, useFahrenheit);
  }
});
