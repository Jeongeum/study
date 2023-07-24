import React from 'react';
import Wrapper from '../../components/common/Wrapper';
import { LoginWrapper } from './styled';
import { LoginForm } from '../../components/Login/LoginForm';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <Wrapper>
      <LoginWrapper>
        <h2>로그인</h2>
        <LoginForm />
        <Link>이메일로 회원가입</Link>
      </LoginWrapper>
    </Wrapper>
  );
};
