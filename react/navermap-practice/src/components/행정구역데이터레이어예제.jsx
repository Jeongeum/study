import React, { useEffect, useRef, useState } from 'react';

export const 행정구역데이터레이어예제 = () => {
  const { naver } = window;
  const mapElement = useRef(null);
  const HOME_PATH = 'https://navermaps.github.io/maps.js.ncp/docs/';
  const urlPrefix = HOME_PATH + '/data/region';
  const urlSuffix = '.json';
  const [regionGeoJson, setRegionGeoJson] = useState([]);
  const [loadCount, setLoadCount] = useState(0);

  console.log(regionGeoJson);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedGeoJson = [...regionGeoJson];

        for (let i = 1; i < 18; i++) {
          let keyword = i + '';

          if (keyword.length === 1) {
            keyword = '0' + keyword;
          }

          const response = await fetch(`${urlPrefix}${keyword}${urlSuffix}`);
          const geojson = await response.json();
          updatedGeoJson[i - 1] = geojson;
        }

        setRegionGeoJson(updatedGeoJson);
        setLoadCount(17); // 데이터 로드 완료 표시
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const map = new naver.maps.Map(mapElement.current, {
      zoom: 7,
      center: new naver.maps.LatLng(36.4203004, 128.31796),
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

    naver.maps.Event.once(map, 'init', () => {
      fetchData();
    });

    if (loadCount === 17) {
      startDataLayer(); // 데이터 로드 완료 시 startDataLayer 함수 호출
    }
  }, [loadCount]);

  return (
    <div ref={mapElement} style={{ width: '100%', height: '500px' }}></div>
  );
};
