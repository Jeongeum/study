import { useState, useLayoutEffect } from 'react';
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  Rectangle,
  useNavermaps,
} from 'react-naver-maps';

// react-naver-maps 사용
// 좌표경계예제 및 지도 이동하기 예제
// 참고 : https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Map.html
const buttonsStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1000,
  padding: '5px',
};

const buttonStyle = {
  margin: '0 5px 5px 0',
  WebkitAppearance: 'button',
  cursor: 'pointer',
  color: '#555',
  padding: '2px 6px',
  background: '#fff',
  border: 'solid 1px #333',
  cursor: 'pointer',
  WebkitBorderRadius: '5px',
  outline: '0 none',
  borderRadius: '5px',
  boxShadow: '2px 2px 1px 1px rgba(0, 0, 0, 0.5)',
};

export const 좌표경계예제 = () => {
  const navermaps = useNavermaps();

  // 각 지역의 좌표
  const jeju = new navermaps.LatLng(33.3590628, 126.534361);
  const busan = new navermaps.LatLng(35.1797865, 129.0750194);
  const dokdo = new navermaps.LatLngBounds(
    new navermaps.LatLng(37.2380651, 131.8562652),
    new navermaps.LatLng(37.2444436, 131.8786475)
  );
  const seoul = new navermaps.LatLngBounds(
    new navermaps.LatLng(37.42829747263545, 126.76620435615891),
    new navermaps.LatLng(37.7010174173061, 127.18379493229875)
  );
  const seoulHouse = new navermaps.LatLng(37.5132, 127.0492);
  const asanHouse = new navermaps.LatLng(36.842, 127.0737);

  const center = new navermaps.LatLng(37.5666805, 126.9784147);

  // useRef 대신 useState를 통해 ref를 가져옵니다.
  const [map, setMap] = useState(null);
  const [rect, setRect] = useState(null);
  const [currentMyLocation, setCurrentMyLocation] = useState({
    Lat: 0,
    Lng: 0,
  });

  useLayoutEffect(() => {
    if (map && rect) {
      rect.setBounds(map.getBounds());
    }
  }, [map, rect]);

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
        defaultCenter={center}
        defaultZoom={17}
        ref={setMap}
        onBoundsChanged={(bounds) => {
          if (rect) {
            window.setTimeout(function () {
              rect.setBounds(bounds);
            }, 500);
          }
        }}
      >
        <Rectangle
          ref={setRect}
          strokeOpacity={0}
          strokeWeight={0}
          fillOpacity={0.2}
          fillColor={'#f00'}
        />
        {/* buttons */}
        <div style={buttonsStyle}>
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.preventDefault();
              if (map) {
                setCurrentMyLocation((prev) => ({
                  ...prev,
                  Lat: jeju._lat,
                  Lng: jeju._lng,
                }));
                map.setCenter(jeju); // 지정한 좌표로 지도의 중심점 설정
              }
            }}
          >
            제주도로 setCenter
          </button>
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.preventDefault();
              if (map) {
                map.setZoom(6, true); // 지도의 줌 레벨 설정
              }
            }}
          >
            6레벨로 setZoom
          </button>
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.preventDefault();
              console.groupCollapsed(dokdo);
              if (map) {
                setCurrentMyLocation((prev) => ({
                  ...prev,
                  Lat: 37.2432,
                  Lng: 131.8668,
                }));
                map.fitBounds(dokdo); // 지정한 좌표 경계를 포함하는 위치로 지도 이동
              }
            }}
          >
            독도로 fitBounds
          </button>
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.preventDefault();
              if (map) {
                setCurrentMyLocation((prev) => ({
                  ...prev,
                  Lat: busan._lat,
                  Lng: busan._lng,
                }));
                map.panTo(busan); // 지정한 좌표를 중심점으로 지도를 이동. 이때, 이동 거리가 가깝다면 부드럽게 이동
              }
            }}
          >
            부산으로 panTo
          </button>
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.preventDefault();
              if (map) {
                setCurrentMyLocation((prev) => ({
                  ...prev,
                  Lat: seoul._lat,
                  Lng: seoul._lng,
                }));
                map.panToBounds(seoul); // 지정한 좌표 경계를 포함하는 위치로 지도를 부드럽게 이동
              }
            }}
          >
            서울로 panToBounds
          </button>
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.preventDefault();
              if (map) {
                map.panBy(new window.naver.maps.Point(10, 10)); // 지정한 픽셀 좌표만큼 지도를 이동
              }
            }}
          >
            panBy로 조금씩 이동하기
          </button>
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.preventDefault();
              if (map) {
                setCurrentMyLocation((prev) => ({
                  ...prev,
                  Lat: seoulHouse._lat,
                  Lng: seoulHouse._lng,
                }));
                map.panTo(seoulHouse); // 지정한 픽셀 좌표만큼 지도를 이동
              }
            }}
          >
            자취방으로 이동하기
          </button>
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.preventDefault();
              if (map) {
                setCurrentMyLocation((prev) => ({
                  ...prev,
                  Lat: asanHouse._lat,
                  Lng: asanHouse._lng,
                }));
                map.panTo(asanHouse); // 지정한 픽셀 좌표만큼 지도를 이동
              }
            }}
          >
            본가로 이동하기
          </button>
        </div>
        <Marker
          position={{ lat: currentMyLocation.Lat, lng: currentMyLocation.Lng }}
        />
      </NaverMap>
    </MapDiv>
  );
};

// 라이브러리 미사용 (에러)
// import React, { useEffect, useRef } from 'react';

// export const 좌표경계예제 = () => {
//   const mapElement = useRef(null);
//   const { naver } = window;
//   const map = useRef(null); // Added map ref
//   const jeju = useRef(new naver.maps.LatLng(33.3590628, 126.534361));
//   const busan = useRef(new naver.maps.LatLng(35.1797865, 129.0750194));
//   const dokdo = useRef(
//     new naver.maps.LatLngBounds(
//       new naver.maps.LatLng(37.2380651, 131.8562652),
//       new naver.maps.LatLng(37.2444436, 131.8786475)
//     )
//   );
//   const seoul = useRef(
//     new naver.maps.LatLngBounds(
//       new naver.maps.LatLng(37.42829747263545, 126.76620435615891),
//       new naver.maps.LatLng(37.7010174173061, 127.18379493229875)
//     )
//   );

//   useEffect(() => {
//     const mapOptions = {
//       center: new naver.maps.LatLng(37.3595704, 127.105399),
//       zoom: 17,
//       mapTypeId: naver.maps.MapTypeId.NORMAL,
//     };

//     map.current = new naver.maps.Map(mapElement.current, mapOptions);

//     const rect = new naver.maps.Rectangle({
//       strokeOpacity: 0,
//       strokeWeight: 0,
//       fillOpacity: 0.2,
//       fillColor: '#f00',
//       bounds: map.current.getBounds(),
//       map: map.current,
//     });

//     naver.maps.Event.addListener(map.current, 'bounds_changed', (bounds) => {
//       window.setTimeout(() => {
//         rect.setBounds(bounds);
//       }, 500);
//     });
//   }, []);

//   return (
//     <>
//       <div ref={mapElement} style={{ minHeight: '400px' }}>
//         <div
//           style={{
//             position: 'absolute',
//             top: '10px',
//             left: '10px',
//             zIndex: '1000',
//           }}
//         >
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               if (map.current) {
//                 map.current.setCenter(jeju.current);
//               }
//             }}
//           >
//             제주도로 setCenter
//           </button>
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               if (map.current) {
//                 map.current.setZoom(6, true);
//               }
//             }}
//           >
//             6레벨로 setZoom
//           </button>
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               if (map) {
//                 map.fitBounds(dokdo);
//               }
//             }}
//           >
//             독도로 fitBounds
//           </button>
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               if (map.current) {
//                 map.current.panTo(busan);
//               }
//             }}
//           >
//             부산으로 panTo
//           </button>
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               if (map.current) {
//                 map.current.panToBounds(seoul);
//               }
//             }}
//           >
//             서울로 panToBounds
//           </button>
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               if (map.current) {
//                 map.current.panBy(new naver.maps.Point(10, 10));
//               }
//             }}
//           >
//             panBy로 조금씩 이동하기
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };
