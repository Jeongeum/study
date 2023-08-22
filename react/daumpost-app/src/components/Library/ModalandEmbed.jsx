import React from 'react';
import { ModalBg } from '../Modal/ModalBg';
import { Modal } from '../Modal/Modal';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { useState } from 'react';
import { styled } from 'styled-components';

// 스타일링
const Input = styled.input`
  /* padding: 7px;
  border-radius: 15px;

  input[type='button'] {
    border: none;
    background-color: orange;
  } */
`;

// 라이브러리를 사용하면서 모달 창 안에 우편번호 서비스 화면이 뜨도록 구현
export const ModalandEmbed = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModalClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen((prev) => !prev);
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
    }

    // 우편번호와 주소 정보를 해당 필드에 넣는다.
    // document.getElementById('library_postcode').value = data.zonecode;
    document.getElementById('modal_address').value = addr;
    // 커서를 상세주소 필드로 이동한다.
    document.getElementById('modal_detailAddress').focus();
  };
  console.log(isOpen);
  return (
    <div>
      <h3>[라이브러리 사용하기] - 모달+임베드</h3>
      <Input type="text" id="modal_address" placeholder="주소" />
      <Input type="button" onClick={handleModalClick} value="우편번호 찾기" />
      <br />
      <Input type="text" id="modal_detailAddress" placeholder="상세주소" />
      {isOpen && (
        <ModalBg>
          <Modal>
            <div className="modalheader">
              <p>주소 검색</p>
              <button onClick={handleModalClick}>X</button>
            </div>
            <DaumPostcodeEmbed
              onComplete={handleComplete}
              onClose={handleClose}
              style={{ height: '470px' }}
            />
          </Modal>
        </ModalBg>
      )}
    </div>
  );
};
