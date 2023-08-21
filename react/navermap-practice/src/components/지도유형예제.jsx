import React, { useEffect, useRef } from 'react';

// <script type="text/javascript" src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID"></script>
/*
지도유형 예제
NORMAL : 일반 이미지 지도 유형
SATELLITE : 위성 이미지 지도 유형
HYBRID : 위성 이미지 지도 위에 주요 도로와 지명을 함께 보여주는 겹침 지도 유형
TERRAIN : 지형의높낮이를 함께 보여주는 지도 유형 
*/

export const 지도유형예제 = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 17,
      mapTypeId: naver.maps.MapTypeId.NORMAL,
      //   mapTypeId: naver.maps.MapTypeId.SATELLITE,
      //   mapTypeId: naver.maps.MapTypeId.HYBRID,
      //   mapTypeId: naver.maps.MapTypeId.TERRAIN,
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
  });
  return (
    <>
      <div ref={mapElement} style={{ minHeight: '400px' }} />
    </>
  );
};
