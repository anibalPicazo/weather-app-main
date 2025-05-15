import { useParams } from 'react-router-dom';
import { useWeather } from '../../hooks/useWeatherHook';
import { WeatherCard } from '../compontents/WeatherCard';


const WeatherPage = () => {
  const { city } = useParams<{ city: string }>();
  const { weather, isLoading, error } = useWeather(city || 'Madrid');

  if (isLoading) return <p>Cargando...</p>;
  if (error || !weather) return <p>Error: {error}</p>;

  return (
    <WeatherCard
      city={city}
      tempMin={weather.tempMin}
      tempMax={weather.tempMax}
      currentTemp={weather.currentTemp} 
      condition={weather.condition}
      icon={weather.icon}
      group={weather.groupCondition}
    />
  );
};

export default WeatherPage;