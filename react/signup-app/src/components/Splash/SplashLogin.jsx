import React from 'react';
import Wrapper from '../common/Wrapper';
import { LoginWrapper, Loginbox, LogoWrapper } from './styled';
import { Img } from '../common/Img/Img';
import LogoIcon from '../../assets/images/symbol-logo.png';
import kakaoIcon from '../../assets/images/kakao.png';
import googleIcon from '../../assets/images/google.png';
import facebookIcon from '../../assets/images/facebook.png';
import { Link } from 'react-router-dom';

export const SplashLogin = () => {
  return (
    <Wrapper backgroundColor="#EA7F42">
      <LogoWrapper>
        <Img src={LogoIcon} alt="로고" width="144px" />
      </LogoWrapper>
      <LoginWrapper>
        <Loginbox>
          <button>
            <Img src={kakaoIcon} alt="카카오톡" />
            카카오톡 계정으로 로그인
          </button>
          <button>
            <Img src={googleIcon} alt="구글" />
            구글 계정으로 로그인
          </button>
          <button>
            <Img src={facebookIcon} alt="페이스북" />
            페이스북 계정으로 로그인
          </button>
        </Loginbox>
        <Link to="/signup">회원가입 </Link>
        <span>|</span>
        <Link to="/login"> 로그인</Link>
      </LoginWrapper>
    </Wrapper>
  );
};
