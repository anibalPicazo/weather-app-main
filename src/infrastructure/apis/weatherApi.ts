const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL
export const WeatherApi = {
  async fetchByCity(city: string) {
    const response = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("Error al obtener datos del clima");
    return await response.json();
  },
};
