import React from 'react';
import LogoImg from '../../assets/images/Logo-hodu.png';
import {
  CheckBoxWrapper,
  FormInfoWrapper,
  FormWrapper,
  InputBox,
  LogoWrapper,
  SignupWrapper,
} from './styled';
import { Button } from '../../components/common/Button/Button';
// import checkedOnImg from '../../assets/images/icon-check-on.png';
// import checkedOffImg from '../../assets/images/icon-check-off.png';

export const Signup = () => {
  return (
    <SignupWrapper>
      <LogoWrapper>
        <a href="/">
          <img src={LogoImg} alt="로고" />
        </a>
      </LogoWrapper>
      <FormWrapper>
        <FormInfoWrapper>
          <InputBox>
            <label for="regId">아이디</label>
            <input type="text" id="regId" />
            <Button size="ms" width="122px" disabled>
              중복확인
            </Button>
          </InputBox>
          <InputBox>
            <label for="regPassword">비밀번호</label>
            <input type="password" id="regPassword" />
          </InputBox>
          <InputBox>
            <label for="regPasswordCheck">비밀번호 재확인</label>
            <input type="password" id="regPasswordCheck" />
          </InputBox>

          <InputBox>
            <label for="regName">이름</label>
            <input type="text" id="regName" />
          </InputBox>
          <InputBox>
            <label for="regPhoneNum">휴대폰번호</label>
            <select className="selectBox">
              <option value="010">010</option>
              <option value="010">011</option>
              <option value="010">016</option>
              <option value="010">017</option>
              <option value="010">018</option>
              <option value="010">019</option>
            </select>
            <input type="number" className="phoneNumBox" />
            <input type="number" className="phoneNumBox" />
          </InputBox>
          <InputBox className="emailBox">
            <label for="regEmail">이메일</label>
            <input type="text" className="emailBox" />@
            <input type="text" className="emailBox" />
          </InputBox>
        </FormInfoWrapper>
        <CheckBoxWrapper>
          <input type="checkbox" name="" id="" />
          <span>
            호두샵의 <b>이용약관</b> 및 개인정보처리방침 에 대한 내용을
            확인하였고 동의합니다.
          </span>
        </CheckBoxWrapper>
        <Button type="submit" size="medium" width="480px" disabled>
          가입하기
        </Button>
      </FormWrapper>
    </SignupWrapper>
  );
};
