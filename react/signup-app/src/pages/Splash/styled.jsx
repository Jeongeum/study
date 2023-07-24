import { styled } from 'styled-components';

export const LogoWrapper = styled.div`
  padding: 180px 123px 177px 123px;
  text-align: center;

  position: relative;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  height: 290px;
  padding: 50px 34px 82px;
  border-radius: 20px 20px 0 0;
  text-align: center;
  font-size: 14px;

  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);

  background-color: #ffffff;

  > span {
    color: #c4c4c4;
  }
`;

export const Loginbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;

  button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 44px;
    padding: 13px 17px;
    width: 100%;
    height: 44px;
    font-weight: 400;

    background-color: transparent;
    color: #767676;

    img {
      position: absolute;
      left: 17px;
      margin-right: 40px;
    }

    &:nth-child(1) {
      border: 1px solid #f2c94c;
    }

    &:nth-child(2) {
      border: 1px solid #767676;
    }

    &:nth-child(3) {
      border: 1px solid #2d9cdb;
      margin-bottom: 20px;
    }
  }
`;
