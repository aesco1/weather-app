import { formatTemp } from "./utils.js";

export function renderWeather(weather, useFahrenheit) {
  if (!weather) return;

  displayCurrentConditions(weather.currentConditions, useFahrenheit);
  displayAlerts(weather.alerts, useFahrenheit);
  displayWeekForecast(weather.weekForecast, useFahrenheit);
}

//USE
function displayAlerts(alerts, useFahrenheit) {}

function displayCurrentConditions(currentConditions, useFahrenheit) {}

function displayWeekForecast(weekForecast, useFahrenheit) {}

export function displayError(errorString) {
  const errorEl = document.getElementById("error-message");
  errorEl.hidden = false;
  errorEl.textContent = errorString;
}

export function clearError() {
  const errorEl = document.getElementById("error-message");
  errorEl.hidden = true;
  errorEl.textContent = "";
}
