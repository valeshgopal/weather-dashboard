import React from 'react';
import moment from 'moment';
import './fiveDayForecast.css';

const FiveDayForecast = ({ forecast, temp }) => {
  const forecasts = forecast?.list?.filter((f, index) => index % 8 === 0);
  console.log({ forecasts });
  return (
    <div className='fiveDay-container'>
      <p className='heading' style={{ textAlign: 'center' }}>
        5 Day Forecast
      </p>
      {forecasts?.length > 0 &&
        forecasts.map((forecast) => {
          return (
            <div className='fiveDay-forecast-item'>
              <div
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <img
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                  alt='weather icon'
                  className='forecast-icon'
                />
                <p
                  style={{
                    position: 'relative',
                    bottom: 10,
                    textAlign: 'center',
                    fontSize: 12,
                  }}
                >
                  {forecast?.weather?.[0]?.main}
                </p>
              </div>
              <div>
                {temp === 'c'
                  ? `${Math.round(forecast?.main?.temp)}°C`
                  : `${Math.round(forecast?.main?.temp * 1.8 + 32)}°F`}
              </div>
              <div>{moment(forecast.dt_txt).format('MMM Do, YYYY')}</div>
            </div>
          );
        })}
    </div>
  );
};

export default FiveDayForecast;
