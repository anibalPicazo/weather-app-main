export const getWeatherIcon = (condition: string): string => {
  switch (condition.toLowerCase()) {

    case "clouds":
      return "/cloudy.png";

    case "rain":
      return "/rainy.png";
    case "sunny":
      return "/sunny.png";
    case "thunderstorm":
      return "/icons/storm.gif";
    case "drizzle":
      return "/icons/drizzle.gif";
    case "mist":
    case "fog":
    case "haze":
      return "/icons/fog.gif";
    default:
      return "/icons/default.gif";
  }
};
