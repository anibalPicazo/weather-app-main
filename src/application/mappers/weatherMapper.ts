import { Weather } from "../../domain/models/Weather";

export const WeatherMapper = {
  //todo tipar data con weatherApiResponse
  fromDto: (data: any): Weather => {
    return {
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      currentTemp: data.main.temp,
      condition: data.weather[0].description,
    };
  },
};
