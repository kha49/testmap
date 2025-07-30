import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import L from 'leaflet';
import './leaflet-provider'; // Import the provider script
import { useEffect } from 'react';

// Custom component to add Leaflet provider layer
function LeafletProviderLayer({ provider }) {
  const map = useMap();
  
  // Use useEffect to add the provider layer when the component mounts
  useEffect(() => {
    const layer = L.tileLayer.provider(provider);
    map.addLayer(layer);
    
    // Cleanup: remove the layer when the component unmounts
    return () => {
      map.removeLayer(layer);
    };
  }, [map, provider]);

  return null;
}

function App() {
  return (
    <MapContainer
      center={[17.9600, 102.6090]} // Center coordinates (Vientiane, Laos)
      zoom={17}
      maxZoom={24}
      style={{ height: '100vh', width: '100vw' }}
    >
      {/* Use the custom component to add the Stadia.AlidadeSatellite provider */}
      <LeafletProviderLayer provider="Stadia.AlidadeSatellite" />
    </MapContainer>
  );
}

export default App;