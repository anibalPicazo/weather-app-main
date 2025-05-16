import { Weather } from "../../domain/models/Weather";
import { WeatherApiDTO } from '../../infrastructure/dto/weatherApiDTO';

export const WeatherMapper = {
  fromDto: (data: WeatherApiDTO): Weather => {
    return {
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      currentTemp: data.main.temp,
      condition: data.weather[0].description,
      icon: data.weather[0].icon,
      groupCondition: data.weather[0].id

    };
  },
};
