import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const { naver } = window;
// 현재 위치 가져오기
const GetCurrentLocation = () => {
  const [myLocation, setMyLocation] = useState("");
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation((prev) => ({
          ...prev,
          Lat: position.coords.latitude,
          Lng: position.coords.longitude,
        }));
      });
    }
  }, []);

  return myLocation;
};

// 좌표에서 주소로 변환하는 함수
const searchCoordinateToAddress = (latlng, map) => {
  // infoWindow 생성
  const infoWindow = new naver.maps.InfoWindow({ content: "", borderWidth: 0 });

  naver.maps.Service.reverseGeocode(
    {
      coords: latlng,
      orders: [
        naver.maps.Service.OrderType.ADDR,
        naver.maps.Service.OrderType.ROAD_ADDR,
      ].join(","),
    },
    (status, response) => {
      if (status !== naver.maps.Service.Status.OK) {
        return alert("Something went wrong!");
      }

      const address = response.v2.address.roadAddress
        ? response.v2.address.roadAddress
        : response.v2.address.jibunAddress;

      // infoWindow 안에 넣을 html을 setContent 메서드에 넣는다.
      infoWindow.setContent(
        [
          '<div style="padding:10px;min-width:200px;line-height:150%;">',
          address,
          "</div>",
        ].join("")
      );

      // open 메서드에 지도와 좌표 전달 -> 정보 창 열기
      infoWindow.open(map, latlng);
    }
  );
};

const searchAddressToCoordinate = (address, map) => {
  naver.maps.Service.geocode({ query: address }, (status, response) => {
    if (status === naver.maps.Service.Status.ERROR) {
      return alert("Something went Wrong!");
    }

    // 주소를 도로명으로 찾을 때, 건물명까지 입력하지 않으면 응답받지 못한다.
    if (response.v2.meta.totalCount === 0) {
      return alert("no results");
    }

    const item = response.v2.addresses[0];
    console.log(item);
    const point = new naver.maps.Point(Number(item.x), Number(item.y));
    const address = item.roadAddress ? item.roadAddress : item.jibunAddress;

    const infoWindow = new naver.maps.InfoWindow({
      content: [
        '<div style="padding:10px;"><h4>' + address + "</h4></div>",
      ].join(""),
      borderWidth: 0,
    });

    // 검색한 주소를 중심으로 지도 움직이기
    map.setCenter(point);
    infoWindow.open(map, point);
  });
};
function App() {
  // 지도
  const mapElement = useRef(null);
  const myLocation = GetCurrentLocation();

  let map;

  // 지도 초기화
  const InitMap = () => {
    if (typeof myLocation !== "string") {
      map = new naver.maps.Map(mapElement.current, {
        center: new naver.maps.LatLng(myLocation.Lat, myLocation.Lng),
        zoomControl: true,
        size: { width: 500, height: 500 },
      });

      naver.maps.Event.addListener(map, "click", (e) => {
        searchCoordinateToAddress(e.coord, map);
      });
    }
  };

  // 검색 submit 이벤트
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const inputValue = e.target.querySelector("input")?.value;
    searchAddressToCoordinate(inputValue, map); // 주소 -> 좌표
  };

  // 검색 click 이벤트
  const onClickHandler = (e) => {
    const inputValue = e.target.querySelector("input")?.value;
    searchAddressToCoordinate(inputValue, map); // 주소 -> 좌표
  };

  useEffect(() => {
    InitMap();
  }, [mapElement, myLocation]);

  return (
    <div>
      <h3 style={{ margin: "0" }}>지도로 위치 찾기</h3>
      <small>좌표를 클릭하여 위치를 설정해주세요.</small>
      <form
        onSubmit={onSubmitHandler}
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "500px",
          margin: "10px 0",
        }}
      >
        <input
          type="text"
          placeholder="(예:제주시)"
          style={{ width: "350px", padding: "10px" }}
        />
        <button
          type="button"
          onClick={onClickHandler}
          style={{ width: "120px" }}
        >
          주소 검색
        </button>
      </form>
      <div ref={mapElement} style={{ minHeight: "400px" }} />;
    </div>
  );
}
export default App;
