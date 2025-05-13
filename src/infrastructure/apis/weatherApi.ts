const API_KEY = "1bb6f820f59fe1092c680f70ee4abc1f"; // reemplaza con tu clave real
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
// todo: get by env
export const WeatherApi = {
  async fetchByCity(city: string) {
    const response = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("Error al obtener datos del clima");
    return await response.json();
  },
};
