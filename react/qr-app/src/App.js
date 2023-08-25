import { QRCodeCanvas } from 'qrcode.react';
import { Map } from './Map';

// value
// url : 이동할 사이트 주소
// 문자 : 해당 문자 검색
function App() {
  const onClickHandler = () => {
    console.log('Click');
  };
  return (
    // <div>
    //   <QRCodeCanvas value="하이" />
    //   <button onClick={onClickHandler}>인증하기</button>
    // </div>
    <Map />
  );
}
export default App;
