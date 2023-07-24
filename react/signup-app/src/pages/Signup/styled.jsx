import { styled } from 'styled-components';

export const SignupWrapper = styled.div`
  padding: 30px 34px;

  h2 {
    font-size: 24px;
    color: #000000;
    text-align: center;
    margin-bottom: 40px;
  }

  button {
    width: 100%;
    border-radius: 44px;
    padding: 13px;

    background-color: #f26e22;
    color: #ffffff;

    &:disabled {
      background-color: #ffc7a7;
    }
  }
`;
