import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  const initializeMap = (accessToken: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = accessToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [23.6345, 37.9395], // Πειραιάς coordinates
      zoom: 13,
    });

    // Add marker for Πειραιάς
    new mapboxgl.Marker({ color: '#1976d2' })
      .setLngLat([23.6345, 37.9395])
      .setPopup(new mapboxgl.Popup().setHTML('<h3>Πειραιάς</h3><p>Περιοχή εξυπηρέτησης</p>'))
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );
  };

  const handleTokenSubmit = () => {
    if (token.trim()) {
      setIsTokenSet(true);
      initializeMap(token);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isTokenSet) {
    return (
      <div className="w-full h-[400px] bg-secondary/30 rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center p-8">
        <h3 className="text-lg font-semibold mb-4">Χάρτης Πειραιά</h3>
        <p className="text-sm text-muted-foreground mb-4 text-center">
          Για να εμφανιστεί ο χάρτης, παρακαλώ εισάγετε το Mapbox Public Token σας.
          <br />
          Μπορείτε να το βρείτε στο <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
        </p>
        <div className="flex gap-2 w-full max-w-md">
          <Input
            type="text"
            placeholder="Mapbox Public Token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleTokenSubmit()}
          />
          <Button onClick={handleTokenSubmit}>Φόρτωση</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px]">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
    </div>
  );
};

export default Map;