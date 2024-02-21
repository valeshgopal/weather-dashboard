import React, { useEffect, useState, Suspense, lazy } from 'react';
import './App.css';
import { Header } from './components/header';

import { Loader } from './components/loader';
import WeatherInfo from './components/weather-info';
import Forecast from './components/forecast';
import FiveDayForecast from './components/five-day-forecast';

import ErrorModal from './components/error';

import { api } from './api';

function App() {
  const [query, setQuery] = useState('Delhi');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [temp, setTemp] = useState('c');

  const getWeather = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === '404') {
          setError('Please provide correct location');
        } else {
          setWeather(result);
        }
        setQuery('');
      });
  };

  const getForecast = () => {
    fetch(
      `${api.base}forecast?lat=${weather?.coord?.lat}&lon=${weather?.coord?.lon}&units=metric&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setForecast(result);
      });
  };

  const handleOnSearchChange = (evt) => {
    if (evt.key === 'Enter') {
      getWeather();
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  useEffect(() => {
    getForecast();
  }, [weather]);

  useEffect(() => {
    if (weather && forecast) {
      setIsLoading(false);
    }
  }, [weather, forecast]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className={
        typeof weather.main != 'undefined'
          ? weather.main.temp > 16
            ? 'app warm'
            : 'app'
          : 'app'
      }
    >
      <main>
        <Header
          query={query}
          setQuery={setQuery}
          temp={temp}
          setTemp={setTemp}
          handleOnSearchChange={handleOnSearchChange}
        />

        <div className='components'>
          <WeatherInfo weather={weather} temp={temp} />
          <Forecast forecast={forecast} temp={temp} />
          <FiveDayForecast forecast={forecast} temp={temp} />
        </div>
        <ErrorModal error={error} setError={setError} />
      </main>
    </div>
  );
}

export default App;
