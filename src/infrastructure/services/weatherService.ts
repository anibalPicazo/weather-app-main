import { WeatherMapper } from "../../application/mappers/weatherMapper";
import { Weather } from "../../domain/models/Weather";
import { WeatherRepository } from "../../domain/repositories/weatherRepository";
import { WeatherApi } from "../apis/weatherApi";

export class WeatherService implements WeatherRepository {
  async getWeatherByCity(city: string): Promise<Weather> {
    const dto = await WeatherApi.fetchByCity(city);
    return WeatherMapper.fromDto(dto);
  }
}
