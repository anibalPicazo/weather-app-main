import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { vi } from 'vitest';
import WeatherPage from './WeatherPage';

vi.mock('../../hooks/useWeatherHook', () => ({
  useWeather: (city: string) => {
    if (city === 'loading') {
      return { weather: null, isLoading: true, error: null };
    }
    if (city === 'error') {
      return { weather: null, isLoading: false, error: 'Error al obtener datos del clima' };
    }
    return {
      weather: {
        tempMin: 10,
        tempMax: 20,
        currentTemp: 15,
        condition: 'Clear',
        icon: '01d',
        groupCondition: 'Clear',
      },
      isLoading: false,
      error: null,
    };
  },
}));

describe('WeatherPage', () => {
  it('muestra el estado de carga', () => {
    render(
      <MemoryRouter initialEntries={['/weather/loading']}>
        <Routes>
          <Route path="/weather/:city" element={<WeatherPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  it('muestra un mensaje de error si hay un problema', () => {
    render(
      <MemoryRouter initialEntries={['/weather/error']}>
        <Routes>
          <Route path="/weather/:city" element={<WeatherPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Error: Error al obtener datos del clima')).toBeInTheDocument();
  });

  it('muestra los datos del clima correctamente', () => {
    render(
      <MemoryRouter initialEntries={['/weather/Madrid']}>
        <Routes>
          <Route path="/weather/:city" element={<WeatherPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Madrid')).toBeInTheDocument();
    expect(screen.getByText('Min:10°C')).toBeInTheDocument();
    expect(screen.getByText('Max: 20°C')).toBeInTheDocument();
   
  });
});