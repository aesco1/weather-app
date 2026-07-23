import Weather from "./weather.js";
const APIKEY = "9SJRDNHMBXSN6TCGFGEZ32A5Z";

export default async function getWeatherRequest(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?key=${APIKEY}`,
  );
  if (!response.ok) {
    throw new Error(`Weather request failed: ${response.status}`);
  }
  const json = await response.json();
  return new Weather(json);
}
