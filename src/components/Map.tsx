
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

  const serviceAreas: Array<{
    name: string;
    coordinates: [number, number];
    isMain: boolean;
    description: string;
  }> = [
    { 
      name: 'Πειραιάς', 
      coordinates: [23.6345, 37.9395], 
      isMain: true,
      description: 'Κεντρικό γραφείο - Άμεση εξυπηρέτηση'
    },
    { 
      name: 'Νίκαια', 
      coordinates: [23.6517, 37.9692], 
      isMain: false,
      description: 'Περιοχή εξυπηρέτησης'
    },
    { 
      name: 'Κερατσίνι', 
      coordinates: [23.6183, 37.9611], 
      isMain: false,
      description: 'Περιοχή εξυπηρέτησης'
    },
    { 
      name: 'Δραπετσώνα', 
      coordinates: [23.6125, 37.9506], 
      isMain: false,
      description: 'Περιοχή εξυπηρέτησης'
    },
    { 
      name: 'Σκαλαβενίτης', 
      coordinates: [23.6028, 37.9444], 
      isMain: false,
      description: 'Περιοχή εξυπηρέτησης'
    },
    { 
      name: 'Καλλιθέα', 
      coordinates: [23.7028, 37.9583], 
      isMain: false,
      description: 'Περιοχή εξυπηρέτησης'
    },
    { 
      name: 'Μοσχάτο', 
      coordinates: [23.6833, 37.9472], 
      isMain: false,
      description: 'Περιοχή εξυπηρέτησης'
    }
  ];

  const initializeMap = (accessToken: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = accessToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [23.6345, 37.9395], // Πειραιάς coordinates
      zoom: 12,
    });

    map.current.on('load', () => {
      // Add service area circles
      map.current?.addSource('service-areas', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: serviceAreas.map(area => ({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: area.coordinates
            },
            properties: {
              name: area.name,
              isMain: area.isMain
            }
          }))
        }
      });

      // Add circle layer for service coverage
      map.current?.addLayer({
        id: 'service-coverage',
        type: 'circle',
        source: 'service-areas',
        paint: {
          'circle-radius': [
            'case',
            ['get', 'isMain'],
            25, // Larger circle for main office
            15  // Smaller circles for service areas
          ],
          'circle-color': [
            'case',
            ['get', 'isMain'],
            'hsl(210, 100%, 45%)', // Primary blue for main office
            'hsl(210, 100%, 55%)'  // Lighter blue for service areas
          ],
          'circle-opacity': 0.6,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff'
        }
      });

      // Add coverage area polygon
      const coverageArea = {
        type: 'Feature' as const,
        geometry: {
          type: 'Polygon' as const,
          coordinates: [[
            [23.5800, 37.9200], // Southwest
            [23.7200, 37.9200], // Southeast
            [23.7200, 37.9800], // Northeast
            [23.5800, 37.9800], // Northwest
            [23.5800, 37.9200]  // Close polygon
          ]]
        },
        properties: {}
      };

      map.current?.addSource('coverage-area', {
        type: 'geojson',
        data: coverageArea
      });

      map.current?.addLayer({
        id: 'coverage-fill',
        type: 'fill',
        source: 'coverage-area',
        paint: {
          'fill-color': 'hsl(210, 100%, 45%)',
          'fill-opacity': 0.1
        }
      });

      map.current?.addLayer({
        id: 'coverage-outline',
        type: 'line',
        source: 'coverage-area',
        paint: {
          'line-color': 'hsl(210, 100%, 45%)',
          'line-width': 2,
          'line-dasharray': [2, 2]
        }
      });
    });

    // Add markers for each service area
    serviceAreas.forEach(area => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = area.isMain 
        ? 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTUiIGZpbGw9ImhzbCgyMTAsIDEwMCUsIDQ1JSkiLz4KPGF1dGggZD0iTTE1IDVMMjAuNiA5TDI2IDlMMjMgMTVMMjYgMjFMMjAuNiAyMUwxNSAyNUw5LjQgMjFMNCAyMUw3IDE1TDQgOUw5LjQgOUwxNSA1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+)'
        : 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9ImhzbCgyMTAsIDEwMCUsIDU1JSkiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+)';
      el.style.width = area.isMain ? '30px' : '24px';
      el.style.height = area.isMain ? '30px' : '24px';
      el.style.backgroundSize = '100%';
      el.style.cursor = 'pointer';

      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div class="p-3">
            <h3 class="font-bold text-lg text-primary mb-2">${area.name}</h3>
            <p class="text-sm text-muted-foreground mb-3">${area.description}</p>
            ${area.isMain ? `
              <div class="border-t pt-2">
                <p class="text-xs font-medium text-primary">📞 Κλήση τώρα:</p>
                <a href="tel:6976846526" class="text-sm font-bold text-primary hover:underline">6976846526</a>
              </div>
            ` : ''}
          </div>
        `);

      new mapboxgl.Marker(el)
        .setLngLat(area.coordinates)
        .setPopup(popup)
        .addTo(map.current!);
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add click event for circles
    map.current.on('click', 'service-coverage', (e) => {
      const coordinates = e.lngLat;
      const properties = e.features?.[0]?.properties;
      
      if (properties) {
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(`
            <div class="p-3">
              <h3 class="font-bold text-lg text-primary">${properties.name}</h3>
              <p class="text-sm text-muted-foreground">Περιοχή εξυπηρέτησης Lamda Tehniki</p>
            </div>
          `)
          .addTo(map.current!);
      }
    });

    // Change cursor on hover
    map.current.on('mouseenter', 'service-coverage', () => {
      map.current!.getCanvas().style.cursor = 'pointer';
    });

    map.current.on('mouseleave', 'service-coverage', () => {
      map.current!.getCanvas().style.cursor = '';
    });
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
        <h3 className="text-lg font-semibold mb-4">Χάρτης Περιοχών Εξυπηρέτησης</h3>
        <p className="text-sm text-muted-foreground mb-4 text-center">
          Για να εμφανιστεί ο χάρτης με τις περιοχές εξυπηρέτησης, παρακαλώ εισάγετε το Mapbox Public Token σας.
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
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-medium">
        <h4 className="font-semibold text-primary mb-2">Περιοχές Εξυπηρέτησης</h4>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span>Κεντρικό Γραφείο</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/70"></div>
            <span>Περιοχές Εξυπηρέτησης</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-primary opacity-30"></div>
            <span>Ζώνη Κάλυψης</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
