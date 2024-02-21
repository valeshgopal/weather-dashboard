import React from 'react';
import './forecast.css';

const Forecast = ({ forecast, temp }) => {
  const hourlyForecasts = forecast?.list?.slice(0, 10);
  return (
    <main className='container'>
      <p className='heading'>Hourly Forecast</p>
      <div className='forecast-box'>
        {hourlyForecasts?.length > 0 &&
          hourlyForecasts.map((forecast) => {
            return (
              <div className='forecast'>
                <div className='date'>{forecast.dt_txt.split(' ')[1]}</div>
                <div className='icon'>
                  <img
                    src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                    alt='weather icon'
                  />
                </div>
                <div className='weather-detail'>{forecast.weather[0].main}</div>
                <div className='temp'>
                  {temp === 'c'
                    ? `${Math.round(forecast?.main?.temp)}°C`
                    : `${Math.round(forecast?.main?.temp * 1.8 + 32)}°F`}
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
};

export default Forecast;
