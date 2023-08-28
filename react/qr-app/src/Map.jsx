import { React, useEffect, useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
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
  const videoRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const getUserCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: 'environment' },
      })
      .then((stream) => {
        let video = videoRef.current;

        video.srcObject = stream;
        video.play();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isOpen) {
      getUserCamera();
    }
  }, [isOpen]);

  const mapCenter = new navermaps.LatLng(37.5173, 127.0474);

  return (
    <div>
      <MapDiv
        style={{
          width: '100%',
          height: '600px',
        }}
      >
        <NaverMap defaultCenter={mapCenter} defaultZoom={17}>
          <Marker position={mapCenter} onClick={openModal} />
        </NaverMap>
      </MapDiv>
      {isOpen && (
        <ModalBg>
          <Modal>
            <button onClick={closeModal}>X</button>
            <div className="qrwrapper">
              <h3>QR 코드를 스캔해주세요.</h3>
              <video autoPlay ref={videoRef} />
            </div>
          </Modal>
        </ModalBg>
      )}
    </div>
  );
};
