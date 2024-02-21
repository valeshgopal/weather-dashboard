import React from 'react';
import './weather.css';
import lookup from 'country-code-lookup';

const WeatherInfo = ({ weather, temp }) => {
  const countryName = (country) => {
    const obj = lookup.byIso(country);
    return obj.country;
  };
  return (
    <>
      {typeof weather?.main != 'undefined' ? (
        <div className='weather-info'>
          <div className='weather-icon'>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt='weather icon'
            />
            <p className='weather'>{weather?.weather?.[0]?.main}</p>
          </div>

          <div className='location-box'>
            <p className='location'>{weather?.name}</p>
            <p>{countryName(weather?.sys?.country)}</p>
          </div>

          <div className='temp-box'>
            <p className='temp'>
              {temp === 'c'
                ? `${Math.round(weather?.main?.temp)}°C`
                : `${Math.round(weather?.main?.temp * 1.8 + 32)}°F`}
            </p>
            <p>Temperature</p>
          </div>
          <div className='humidity-box'>
            <p className='humidity'>{weather?.main?.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className='wind-box'>
            <p className='wind'>{weather?.wind?.speed}mi/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default WeatherInfo;
