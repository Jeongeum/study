import React from 'react';
import { useState } from 'react';
import DaumPostcodeEmbed, { useDaumPostcodePopup } from 'react-daum-postcode';

export const Library = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scriptUrl =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(scriptUrl); // 우편번호 검색 서비스를 팝업 형식으로 이용

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    open({ onComplete: handleComplete });
  };

  const handleComplete = (data) => {
    console.log(data);

    let addr = ''; // 주소 변수
    let extraAddr = ''; // 참고항목 변수

    // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
    if (data.userSelectedType === 'R') {
      // 사용자가 도로명 주소를 선택했을 경우
      addr = data.roadAddress;
    } else {
      // 사용자가 지번 주소를 선택했을 경우(J)
      addr = data.jibunAddress;
    }

    // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
    if (data.userSelectedType === 'R') {
      // 법정동명이 있을 경우 추가한다. (법정리는 제외)
      // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
      if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
        extraAddr += data.bname;
      }

      // 건물명이 있고, 공동주택일 경우 추가한다.
      if (data.buildingName !== '' && data.apartment === 'Y') {
        extraAddr +=
          extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
      }

      // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
      if (extraAddr !== '') {
        extraAddr = ' (' + extraAddr + ')';
      }

      if (document.getElementById === 'modal_')
        // 조합된 참고항목을 해당 필드에 넣는다.
        document.getElementById('library_extraAddress').value = extraAddr;
    } else {
      document.getElementById('library_extraAddress').value = '';
    }

    // 우편번호와 주소 정보를 해당 필드에 넣는다.
    document.getElementById('library_postcode').value = data.zonecode;
    document.getElementById('library_address').value = addr;
    // 커서를 상세주소 필드로 이동한다.
    document.getElementById('library_detailAddress').focus();
  };
  return (
    <>
      <div>
        <h3>[라이브러리 사용하기] - 팝업창</h3>
        <input type="text" id="library_postcode" placeholder="우편번호" />
        <input type="button" onClick={handleClick} value="우편번호 찾기" />
        <br />
        <input type="text" id="library_address" placeholder="주소" />
        <br />
        <input type="text" id="library_detailAddress" placeholder="상세주소" />
        <input type="text" id="library_extraAddress" placeholder="참고항목" />
      </div>
      <div>
        <h3>[라이브러리 사용하기] - 임베드 방식</h3>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </div>
    </>
    //
  );
};
