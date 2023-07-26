import { styled } from 'styled-components';

export const LoginWrapper = styled.div`
  padding: 30px 34px;

  h2 {
    font-size: 24px;
    color: #000000;
    text-align: center;
  }

  form {
    margin-top: 30px;

    & > div:nth-child(1) {
      margin-bottom: 16px;
    }

    span {
      display: inline-block;
      font-size: 12px;
      color: #eb5757;
      margin-bottom: 16px;
    }
  }

  a {
    display: block;
    text-align: center;
    margin-top: 20px;
    font-size: 12px;
  }
`;
