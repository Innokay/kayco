import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Map = () => {
  // Coordinates for Buffalo Mall, Nakuru
  const mallLocation = [-0.2836, 36.0719];

  // Define the custom icon
  const customIcon = new L.Icon({
    iconUrl: '/images/marker.png', // Ensure this file exists in the public/images folder
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  return (
    <div style={{ height: '100vh', width: '78vw', marginTop: '20px', marginBottom: '50px' }}> {/* Ensure the container has full height and width */}
      <h1>Welcome to Kay's Collection</h1>
      <div style={{ height: '100%', width: '100%' }}>
        <MapContainer center={mallLocation} zoom={15} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={mallLocation} icon={customIcon}>
            <Popup>
              Kay's Collections at Buffalo Mall, Nakuru
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;

