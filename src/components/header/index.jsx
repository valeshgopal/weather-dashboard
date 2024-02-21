import React from 'react';
import './header.css';
import moment from 'moment';
import Toggle from '../toggle';

export const Header = ({
  query,
  setQuery,
  temp,
  setTemp,
  handleOnSearchChange,
}) => {
  return (
    <div className='header'>
      <p className='date-format'>
        {moment(Date.now()).format('dddd MMM Do, YYYY')}
      </p>
      <div className='search-box'>
        <input
          type='text'
          className='search-bar'
          placeholder='Search city name'
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyDown={handleOnSearchChange}
        />
      </div>
      <Toggle temp={temp} setTemp={setTemp} />
    </div>
  );
};
