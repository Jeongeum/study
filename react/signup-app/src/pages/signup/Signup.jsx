import React, { useState } from 'react';
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
import { TextFileCard } from '../../components/common/TextFiledCard/TextFileCard';
import { postUserSignup } from '../../api/instance';

// import checkedOnImg from '../../assets/images/icon-check-on.png';
// import checkedOffImg from '../../assets/images/icon-check-off.png';

export const Signup = () => {
  const [loginValue, setLoginValue] = useState({
    username: '',
    password: '',
    password2: '',
    phone_number: '',
    name: '',
  });

  const { username, password, password2, phone_number, name } = loginValue;
  const [email, setEmail] = useState('');

  const onchangeInput = (e) => {
    const { name, value } = e.target;
    setLoginValue({ ...loginValue, [name]: value });
  };

  // 아이디 중복 확인
  const onClickUsernameCheck = () => {};
  // 유효성 검사
  const onSubmitReg = (e) => {
    e.preventDefault();
    postUserSignup(loginValue);
    password === password2
      ? postUserSignup(loginValue)
      : console.log('비번 안맞아');
    console.log(password, password2);
    console.log('유저정보 : ', loginValue);
  };
  return (
    <SignupWrapper>
      <LogoWrapper>
        <a href="/">
          <img src={LogoImg} alt="로고" />
        </a>
      </LogoWrapper>
      <FormWrapper onSubmit={(e) => onSubmitReg(e)}>
        <FormInfoWrapper>
          <InputBox>
            <TextFileCard
              id="regId"
              name="username"
              type="text"
              value={username}
              onChange={onchangeInput}
            >
              아이디
            </TextFileCard>
            <Button size="ms" width="122px" disabled={username}>
              중복확인
            </Button>
          </InputBox>

          <InputBox>
            <TextFileCard
              id="regPassword"
              name="password"
              type="password"
              value={password}
              onChange={onchangeInput}
            >
              비밀번호
            </TextFileCard>
          </InputBox>
          <InputBox>
            <TextFileCard
              id="regPasswordCheck"
              name="password2"
              type="password"
              value={password2}
              onChange={onchangeInput}
            >
              비밀번호 재확인
            </TextFileCard>
          </InputBox>

          <InputBox>
            <TextFileCard
              id="regName"
              name="name"
              type="text"
              value={name}
              onChange={onchangeInput}
            >
              이름
            </TextFileCard>
          </InputBox>
          <InputBox>
            <TextFileCard
              id="regPhoneNum"
              name="phone_number"
              type="text"
              value={phone_number}
              onChange={onchangeInput}
            >
              휴대폰번호
            </TextFileCard>
          </InputBox>
          <InputBox className="emailBox">
            <TextFileCard id="regEmail" name="email" type="email" value={email}>
              이메일
            </TextFileCard>
          </InputBox>
        </FormInfoWrapper>
        <CheckBoxWrapper>
          <input type="checkbox" name="" id="" />
          <span>
            호두샵의 <b>이용약관</b> 및 개인정보처리방침 에 대한 내용을
            확인하였고 동의합니다.
          </span>
        </CheckBoxWrapper>
        <Button type="submit" size="medium" width="480px">
          가입하기
        </Button>
      </FormWrapper>
    </SignupWrapper>
  );
};
