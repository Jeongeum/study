import { React } from 'react';
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  useNavermaps,
} from 'react-naver-maps';

export const 마커표시예제 = () => {
  //   const { naver } = window;
  //   const mapElement = useRef(null);

  //   useEffect(() => {
  //     const map = new naver.maps.Map(mapElement.current, {
  //       center: new naver.maps.LatLng(37.3595704, 127.105399),
  //       zoom: 15,
  //     });

  //     const marker = new naver.maps.Marker({
  //       position: new naver.maps.LatLng(37.3595704, 127.105399),
  //       map: map,
  //     });
  //   });

  // 라이브러리 사용 시
  const navermaps = useNavermaps();
  return (
    // <div ref={mapElement} style={{ minHeight: '400px' }}>
    //   마커표시예제
    // </div>
    <MapDiv
      style={{
        width: '100%',
        height: '600px',
      }}
    >
      <NaverMap
        defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
        defaultZoom={15}
      >
        <Marker position={navermaps.LatLng(37.3595704, 127.105399)} />
      </NaverMap>
    </MapDiv>
  );
};
