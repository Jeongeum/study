import React from 'react';
import Wrapper from '../../components/common/Wrapper';

import { SignupWrapper } from './styled';
import { SignupForm } from '../../components/Signup/SignupForm';

export const SignupPage = () => {
  return (
    <Wrapper>
      <SignupWrapper>
        <h2>이메일로 회원가입</h2>
        <SignupForm />
      </SignupWrapper>
    </Wrapper>
  );
};
