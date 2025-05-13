import { Weather } from "../models/Weather";

export interface WeatherRepository {
  getWeatherByCity(city: string): Promise<Weather>;
}
