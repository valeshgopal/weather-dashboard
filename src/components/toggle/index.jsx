import React from 'react';
import './toggle.css';

const Toggle = ({ temp, setTemp }) => {
  const handleClick = (e) => {
    if (e.target.checked) {
      setTemp('f');
    } else {
      setTemp('c');
    }
  };
  return (
    <div style={{ position: 'relative' }}>
      <div class='toggleWrapper' onClick={handleClick}>
        <input
          type='checkbox'
          name='toggle1'
          class='mobileToggle'
          id='toggle1'
          onChange={handleClick}
        />
        <label for='toggle1' />
      </div>
      <p className='celsius'>°C</p>
      <p className='fahrenheit'>°F</p>
    </div>
  );
};

export default Toggle;
