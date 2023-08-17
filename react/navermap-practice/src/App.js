import { useEffect, useRef, useState } from 'react';
import myMarker from './assets/marker.png';

function App() {
  const mapElement = useRef(null);
  const [currentMyLocation, setCurrentMyLocation] = useState({
    Lat: 0,
    Lng: 0,
  });

  // 현재위치
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentMyLocation((prev) => ({
          ...prev,
          Lat: position.coords.latitude,
          Lng: position.coords.longitude,
        }));
      });
    }
  };

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver || !currentMyLocation) return;

    const mapOptions = {
      center: new naver.maps.LatLng(
        currentMyLocation.Lat,
        currentMyLocation.Lng
      ),
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);

    const markerOptions = {
      position: new naver.maps.LatLng(
        currentMyLocation.Lat,
        currentMyLocation.Lng
      ),
      map,
      icon: {
        url: `${myMarker}`,
        size: new naver.maps.Size(24, 24),
        scaledSize: new naver.maps.Size(24, 24),
      },
    };

    // 지도 위에 표시될 마커
    new naver.maps.Marker(markerOptions);
  }, [currentMyLocation]);

  useEffect(() => {
    getLocation();
  }, []);

  console.log(currentMyLocation);

  return <div ref={mapElement} style={{ minHeight: '400px' }} />;
}
export default App;
