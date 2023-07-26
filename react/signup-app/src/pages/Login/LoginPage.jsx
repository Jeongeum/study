import React, { useState } from 'react';
import { Wrapper } from '../../components/common/Wrapper';
import { LoginWrapper } from './styled';
import { LoginForm } from '../../components/Login/LoginForm';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userLogin } from '../../api/auth';

export const LoginPage = () => {
  const [loginValue, setLoginValue] = useState({
    email: '',
    password: '',
  });
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginValue({ ...loginValue, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const data = {
      user: { ...loginValue },
    };

    userLogin(JSON.stringify(data)).then((res) => {
      console.log(res);
      if (res.message === '이메일 또는 비밀번호가 일치하지 않습니다.') {
        setLoginMessage(res.message);
      } else {
        navigate('/home');
      }
    });
  };

  return (
    <Wrapper>
      <LoginWrapper>
        <h2>로그인</h2>
        <LoginForm
          loginValue={loginValue}
          onChangeHandler={onChangeHandler}
          onSubmitHandler={onSubmitHandler}
          loginMessage={loginMessage}
        />
        <Link to="/signup">이메일로 회원가입</Link>
      </LoginWrapper>
    </Wrapper>
  );
};
