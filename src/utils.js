function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

export function formatTemp(fahrenheitValue, useFahrenheit) {
  const value = useFahrenheit
    ? fahrenheitValue
    : fahrenheitToCelsius(fahrenheitValue);
  const unit = useFahrenheit ? "°F" : "°C";
}
