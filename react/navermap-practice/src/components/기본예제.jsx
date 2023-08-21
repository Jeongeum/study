import React, { useEffect, useRef } from 'react';

// <script type="text/javascript" src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID"></script>
// 지도 생성 예제
export const 기본예제 = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 17,
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
  });
  return (
    <>
      <div ref={mapElement} style={{ minHeight: '400px' }} />
    </>
  );
};
