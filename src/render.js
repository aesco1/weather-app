import { formatTemp } from "./utils.js";

export function renderWeather(weather, useFahrenheit) {
  if (!weather) return;

  displayAlerts(weather.alerts, useFahrenheit);
  displayCurrentConditions(weather.currentConditions, useFahrenheit);
  displayWeekForecast(weather.weekForecast, useFahrenheit);
}

//USE
function displayAlerts(alerts, useFahrenheit) {}

function displayCurrentConditions(currentConditions, useFahrenheit) {}

function displayWeekForecast(weekForecast, useFahrenheit) {}

function displayError(errorString, useFahrenheit) {}
