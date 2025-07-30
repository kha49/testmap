import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import L from 'leaflet';
import '../leaflet-providers'; // Import the provider script
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
    <></>
  );
}

export default App;