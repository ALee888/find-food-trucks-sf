import React from 'react';

function Navbar({ latitude, longitude, range, onLatitudeChange, onLongitudeChange, onRangeChange, onSearchClick }) {
  return (
    <nav>
        <span>Latitude</span>
        <input
            type="text"
            value={latitude}
            onChange={onLatitudeChange}
            placeholder="Latitude"
        />
        <span>Longitude</span>
        <input
            type="text"
            value={longitude}
            onChange={onLongitudeChange}
            placeholder="Longitude"
        />
        <button onClick={onSearchClick}>Search</button>
        <input
            type="range"
            value={range}
            min={0}
            max={25}
            step={1}
            onChange={onRangeChange}
        />
        <span>Range: {range} miles</span>
    </nav>
  );
}

export default Navbar;