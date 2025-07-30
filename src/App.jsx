import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import CSS của Leaflet
import './App.css';

function App() {
  const stadiaAlidadeSatelliteUrl = 'https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg';
  const stadiaAttribution = '© CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | © <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> © <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  return (
    <>
      <MapContainer
        center={[17.9600, 102.6090]} // Tọa độ trung tâm đã điều chỉnh
        zoom={17}
        maxZoom={24}
        style={{ height: '100vh', width: '100vw' }}
      >
        <TileLayer
          url={stadiaAlidadeSatelliteUrl}
          attribution={stadiaAttribution}
        />
      </MapContainer>
    </>
  );
}

export default App;