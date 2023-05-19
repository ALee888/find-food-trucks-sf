import React, { useState } from 'react';
import Map from './map';
import Navbar from './NavBar'
import { getFoodTrucks } from './foodtrucks';

import "./styles.css";
import "leaflet/dist/leaflet.css"

const App = () => {
    const [latitude, setLatitude] = useState(37.7937);
    const [longitude, setLongitude] = useState(-122.3965);
    const [range, setRange] = useState(25);

    const handleLatitudeChange = (event) => {
        setLatitude(event.target.value);
    };

    const handleLongitudeChange = (event) => {
        setLongitude(event.target.value);
    };

    const handleRangeChange = (event) => {
        setRange(event.target.value);
    };

    const handleSearchClick = () => {
        // Perform your search logic here
    };
    var searchLocation = [latitude, longitude];
    var markers = getFoodTrucks(searchLocation, range);
    return (
        <div className='app'>
            <Navbar 
                latitude={latitude}
                longitude={longitude}
                range={range}
                onLatitudeChange={handleLatitudeChange}
                onLongitudeChange={handleLongitudeChange}
                onRangeChange={handleRangeChange}
                onSearchClick={handleSearchClick}
            />
            <Map location={[latitude, longitude]} markers={markers} />
        </div>
    );
} 

export default App;