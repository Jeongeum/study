import React, { useEffect, useState } from 'react';
import {
  Container as MapDiv,
  InfoWindow,
  NaverMap,
  useNavermaps,
} from 'react-naver-maps';

// 라이브러리 사용
// 참고 : https://zeakd.github.io/react-naver-maps/examples/map-tutorial-6-geolocation/

export const Geolocationapi = () => {
  const navermaps = useNavermaps();

  const [map, setMap] = useState(null);
  const [infowindow, setInfoWindow] = useState(null);

  const onSuccessGeolocation = (position) => {
    if (!map || !infowindow) return;

    const location = new navermaps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    map.setCenter(location);
    map.setZoom(17);

    infowindow.setContent(
      '<div style="padding: 20px;">' +
        'geolocation.getCurrentPosition() 위치' +
        '</div>'
    );
    infowindow.open(map, location);
    console.log('Coordivates: ', location.toString());
  };

  const onErrorGeolocation = () => {
    if (!map || !infowindow) return;

    const center = map.getCenter();
    infowindow.setContent(
      '<div style="padding:20px;">' +
        '<h5 style="margin-bottom:5px;color:#f00;">Geolocation failed!</h5>' +
        'latitude: ' +
        center.lat() +
        '<br />longitude: ' +
        center.lng() +
        '</div>'
    );

    infowindow.open(map, center);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation
      );
    } else {
      const center = map.getCenter();
      infowindow.setContent(
        '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>'
      );
      infowindow.open(map, center);
    }
  };

  useEffect(() => {
    if (!map || !infowindow) {
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation
      );
    } else {
      const center = map.getCenter();
      infowindow.setContent(
        '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>'
      );
      infowindow.open(map, center);
    }
  }, [map, infowindow]);

  return (
    <MapDiv
      style={{
        position: 'relative',
        width: '100%',
        height: '600px',
      }}
    >
      <NaverMap
        // uncontrolled
        defaultCenter={new navermaps.LatLng(37.5666805, 126.9784147)}
        defaultZoom={10}
        defaultMapTypeId={navermaps.MapTypeId.NORMAL}
        ref={setMap}
      >
        <InfoWindow ref={setInfoWindow} />
      </NaverMap>
    </MapDiv>
  );
};
