import React, { useState } from 'react';
import { Wrapper } from '../../components/common/Wrapper';

import { SignupWrapper } from './styled';
import { SignupForm } from '../../components/Signup/SignupForm';
import { userEmailValid } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

export const SignupPage = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const navigate = useNavigate();

  const [signupValue, setSignupValue] = useState({
    email: '',
    password: '',
  });

  // 형식 검증 (입력할 때)
  const isValid = (target, value) => {
    if (target === 'email') {
      const regEmail =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

      if (!regEmail.test(value)) {
        setIsValidEmail(false);
        setEmailMessage('이메일 형식이 올바르지 않습니다.');
      } else {
        setIsValidEmail(true);
        setEmailMessage('');
      }
    } else if (target === 'password') {
      if (value.length < 6 && value.length !== '') {
        setIsValidPassword(false);
        setPasswordMessage('비밀번호는 6자 이상이어야 합니다.');
      } else {
        setIsValidPassword(true);
        setPasswordMessage('');
      }
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignupValue({ ...signupValue, [name]: value });
    isValid(name, value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const data = {
      user: { ...signupValue },
    };
    userEmailValid(JSON.stringify(data)).then((res) => {
      if (res.message === '이미 가입된 이메일 주소입니다.') {
        setEmailMessage(res.message);
      } else if (res.message === '사용 가능한 이메일 입니다.') {
        setEmailMessage(res.message);
        navigate('/profilesetting', { state: signupValue });
      } else {
        console.error(res.message);
      }
    });
  };

  return (
    <Wrapper>
      <SignupWrapper>
        <h2>이메일로 회원가입</h2>
        <SignupForm
          signupValue={signupValue}
          onSubmitHandler={onSubmitHandler}
          onChangeHandler={onChangeHandler}
          emailMessage={emailMessage}
          passwordMessage={passwordMessage}
        />
      </SignupWrapper>
    </Wrapper>
  );
};
