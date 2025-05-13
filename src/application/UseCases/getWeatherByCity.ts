import { Weather } from "../../domain/models/Weather";
import { WeatherService } from "../../infrastructure/services/weatherService";

const repository = new WeatherService();

export const getWeatherByCity = async (city: string): Promise<Weather> => {
  return await repository.getWeatherByCity(city);
};
