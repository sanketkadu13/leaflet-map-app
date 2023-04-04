import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function Map() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }, []);

  return (
    <MapContainer center={[location.lat || 0, location.lng || 0]} zoom={13} style={{ height: '100vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="Map data © OpenStreetMap contributors" />
      {location.lat && <Marker position={[location.lat, location.lng]} />}
    </MapContainer>
  );
}

export default Map;
        