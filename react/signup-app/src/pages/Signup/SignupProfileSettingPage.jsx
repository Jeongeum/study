import React from 'react';
import Wrapper from '../../components/common/Wrapper';
import { SignupWrapper } from './styled';
import { ProfileSettingForm } from '../../components/Signup/ProfileSettingForm';

export const SignupProfileSettingPage = () => {
  return (
    <Wrapper>
      <SignupWrapper>
        <h2>프로필 설정</h2>
        <p>나중에 언제든지 변경할 수 있어요!</p>
        <ProfileSettingForm />
      </SignupWrapper>
    </Wrapper>
  );
};
