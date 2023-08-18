import { useEffect, useRef, useState } from 'react';
import myMarker from './assets/marker.png';

function App() {
  const mapElement = useRef(null);
  const [clickMap, setClickMap] = useState({ Lat: 0, Lng: 0 });
  const [clickLocation, setClickLocation] = useState('');
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
    const marker = new naver.maps.Marker(markerOptions);

    naver.maps.Event.addListener(map, 'click', async (e) => {
      marker.setPosition(e.coord);
      setClickMap((prev) => ({
        // 클릭하는 곳의 좌표 알아내기
        ...prev,
        Lat: e.coord._lat,
        Lng: e.coord._lng,
      }));
      naver.maps.Service.reverseGeocode(
        {
          coords: new naver.maps.LatLng(e.coord._lat, e.coord._lng),
        },
        (status, response) => {
          if (status !== naver.maps.Service.Status.OK) {
            return alert('Something wrong!');
          }
          const result = response.v2;
          console.log(result);
          setClickLocation(() => result.address.jibunAddress);
        }
      );
    });
    //   naver.maps.Service.reverseGeocode({
    //     coords: new naver.maps.LatLng(clickMap.Lat, clickMap.Lng),
    //   }) => {
    //     if(status !== naver.maps.Service.Status.OK) {

    //     }
    //   }
    // });
  }, [currentMyLocation]);

  useEffect(() => {
    getLocation();
  }, []);
  console.log(clickLocation);
  return (
    <>
      <div ref={mapElement} style={{ minHeight: '400px' }} />
      <div>{clickMap.Lat}</div>
      <div>{clickMap.Lng}</div>
      <div>주소는 : {clickLocation}</div>
    </>
  );
}
export default App;
