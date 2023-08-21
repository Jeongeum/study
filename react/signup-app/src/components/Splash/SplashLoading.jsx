import React from 'react';
import { Wrapper } from '../common/Wrapper';
import splashLogoIcon from '../../assets/images/color-logo.png';
import splashLogoTextIcon from '../../assets/images/color-text-logo.png';
import { Img } from '../common/Img/Img';
import { SplashWrapper } from './styled';

export const SplashLoading = () => {
  return (
    <Wrapper>
      <SplashWrapper>
        <Img src={splashLogoIcon} id="splashLogo" />

        <Img src={splashLogoTextIcon} id="splashLogoText" />
      </SplashWrapper>
    </Wrapper>
  );
};
