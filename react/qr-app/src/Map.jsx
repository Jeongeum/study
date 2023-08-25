import { QRCodeCanvas } from 'qrcode.react';
import { React, useState } from 'react';
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  useNavermaps,
} from 'react-naver-maps';
import { ModalBg } from './Modal/ModalBg';
import { Modal } from './Modal/Modal';

export const Map = () => {
  const navermaps = useNavermaps();
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    console.log('Click');
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div>
      <MapDiv
        style={{
          width: '100%',
          height: '600px',
        }}
      >
        <NaverMap
          defaultCenter={new navermaps.LatLng(37.5173, 127.0474)}
          defaultZoom={17}
        >
          <Marker
            position={navermaps.LatLng(37.5173, 127.0474)}
            onClick={onClickHandler}
          />
        </NaverMap>
      </MapDiv>
      {isOpen && (
        <ModalBg>
          <Modal>
            <h3>인증하기</h3>
            <button onClick={onClickHandler}>X</button>
            <QRCodeCanvas value="하이" />
          </Modal>
        </ModalBg>
      )}
    </div>
  );
};
