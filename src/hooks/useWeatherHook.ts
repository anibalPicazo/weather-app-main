import { useEffect, useState } from "react";
import { getWeatherByCity } from "../application/UseCases/getWeatherByCity";
import { Weather } from "../domain/models/Weather";

export const useWeather = (city: string) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await getWeatherByCity(city);

        setWeather(data);
      } catch (e) {
        setError("No se pudo obtener el clima");
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [city]);

  return { weather, isLoading, error };
};
