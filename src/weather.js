export default class Weather {
  constructor(json) {
    this.city = json.resolvedAddress;
    this.alerts = json.alerts;
    this.currentConditions = json.currentConditions;
    this.weekForecast = json.days;
  }
}
