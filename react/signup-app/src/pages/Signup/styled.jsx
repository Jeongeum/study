import { styled } from 'styled-components';

export const SignupWrapper = styled.div`
  padding: 30px 34px;

  h2 {
    font-size: 24px;
    color: #000000;
    text-align: center;
  }

  p {
    font-size: 14px;
    text-align: center;
    margin: 12px 0 30px;
  }

  form {
    margin-top: 30px;
  }
`;

export const ProfileImgWrapper = styled.div`
  position: relative;
  width: 110px;
  margin: 0 auto;

  .upload {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  input {
    display: none;
  }
`;
