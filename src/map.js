import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {Icon, divIcon, point} from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';


const Map = ({ location, markers }) => {
  const foodTruckIcon = new Icon({
    iconUrl: require("./img/food-marker.png"),
    iconSize: [38,38] // Size of the icon
  });
  const userLocationIcon = new Icon({
    iconUrl: require("./img/marker.png"),
    iconSize: [38,38]
  })
  const createCustomeClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      iconSize: point(33, 33, true)
    });
  } 
  return (
    <MapContainer center={location} zoom={12} style={{ height: '1000px' }}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup chunckedLoading iconCreateFunction={createCustomeClusterIcon}>
        {markers.map(marker => (
          <Marker position={marker.position} icon={foodTruckIcon}>
            <Popup>{marker.applicant}<br />{marker.address}<h3>Food Items:</h3>{marker.fooditems}</Popup>
          </Marker>

        ))}
      </MarkerClusterGroup>
      <Marker position={location} icon={userLocationIcon}>
        <Popup>Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;