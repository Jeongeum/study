import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';

export const Test = () => {
  const { naver } = window;
  const mapElement = useRef(null);
  const [regionGeoJson, setRegionGeoJson] = useState([]);
  const [clickMap, setClickMap] = useState({ Lat: 0, Lng: 0 });
  const [emdCd, setEmdCd] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      console.log(clickMap);
      $.ajax({
        url: 'https://api.vworld.kr/req/data',
        dataType: 'jsonp', // JSONP 사용
        data: {
          service: 'data',
          request: 'GetFeature',
          data: 'LT_C_ADEMD_INFO',
          key: '2740FCEF-1F69-3459-9D67-9EEBB4379C5A',
          domain: '127.0.0.1:3000',
          attrFilter: `emdCd:=:${emdCd}`,
        },
        success: function (response) {
          const coord =
            response.response.result.featureCollection.features[0].geometry
              .coordinates;
          setRegionGeoJson(() => coord);
        },
        error: function (xhr, status, error) {
          console.error('Error fetching data:', error);
        },
      });
      //   const url = `/req/data?service=data&format=json&request=GetFeature&data=LT_C_ADEMD_INFO&key=2740FCEF-1F69-3459-9D67-9EEBB4379C5A&domain=127.0.0.1:3000&attrFilter=emd_cd:=:${emdCd}`;
      //   console.log(url);

      //   fetch(url, {
      //     headers: {
      //       Accept: 'application / json',
      //     },
      //     method: 'GET',
      //   })
      //     .then((res) => JSON.stringify(res.json()))
      //     .then((data) => {
      //       console.log(data);
      //     });
      //
      //   fetch(url)
      //     .then((response) => {
      //       if (response.ok) {
      //         return response.json();
      //       } else {
      //         throw new Error('network error!');
      //       }
      //     })
      //     .then((responseJson) => {
      //       console.log(JSON.stringify(responseJson));
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      //   try {
      //     const updatedGeoJson = [...regionGeoJson];
      //     const response = await fetch(url);
      //     const geojson = await response.json();

      //     console.log(url);

      //     setRegionGeoJson(updatedGeoJson);
      //   } catch (error) {
      //     console.error('Error fetching data:', error);
      //   }
    };

    const map = new naver.maps.Map(mapElement.current, {
      zoom: 15,
      center: new naver.maps.LatLng(36.8419, 127.0737),
    });

    const tooltip = document.createElement('div');
    tooltip.style.position = 'absolute';
    tooltip.style.zIndex = '1000';
    tooltip.style.padding = '5px 10px';
    tooltip.style.backgroundColor = '#fff';
    tooltip.style.border = 'solid 2px #000';
    tooltip.style.fontSize = '14px';
    tooltip.style.pointerEvents = 'none';
    tooltip.style.display = 'none';

    map.getPanes().floatPane.appendChild(tooltip);

    const startDataLayer = () => {
      map.data.setStyle(function (feature) {
        let styleOptions = {
          fillColor: '#ff0000',
          fillOpacity: 0.0001,
          strokeColor: '#ff0000',
          strokeWeight: 2,
          strokeOpacity: 0.4,
        };

        if (feature.getProperty('focus')) {
          styleOptions = {
            fillOpacity: 0.6,
            fillColor: '#0f0',
            strokeColor: '#0f0',
            strokeWeight: 4,
            strokeOpacity: 1,
          };
        }

        return styleOptions;
      });

      regionGeoJson.forEach(function (geojson) {
        map.data.addGeoJson(geojson);
      });

      map.data.addListener('click', function (e) {
        const feature = e.feature;

        if (feature.getProperty('focus') !== true) {
          feature.setProperty('focus', true);
        } else {
          feature.setProperty('focus', false);
        }
      });

      map.data.addListener('mouseover', function (e) {
        console.log(e);
        const feature = e.feature;
        const regionName = feature.getProperty('area1');

        tooltip.style.display = '';
        tooltip.style.left = e.offset.x + 'px';
        tooltip.style.top = e.offset.y + 'px';
        tooltip.textContent = regionName;

        map.data.overrideStyle(feature, {
          fillOpacity: 0.6,
          strokeWeight: 4,
          strokeOpacity: 1,
        });
      });

      map.data.addListener('mouseout', function () {
        tooltip.style.display = 'none';
        tooltip.textContent = '';
        map.data.revertStyle();
      });
    };

    naver.maps.Event.addListener(map, 'click', async (e) => {
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
        async (status, response) => {
          if (status !== naver.maps.Service.Status.OK) {
            return alert('Something wrong!');
          }
          const result = await response.v2.results[0];
          setEmdCd(() => Number(result.code.id.substring(0, 8)));
        }
      );
    });

    if (emdCd !== 0) {
      fetchData();
      startDataLayer();
    }
  }, [emdCd]);

  return (
    <div ref={mapElement} style={{ width: '100%', height: '500px' }}></div>
  );
};
