import styled from 'styled-components';

export const SignupWrapper = styled.div``;

export const LogoWrapper = styled.div`
  margin: 70px auto;

  a {
    width: 100%;
    display: block;
    text-align: center;
  }

  img {
    width: 238px;
    height: 74px;
  }
`;
export const FormWrapper = styled.form`
  width: 550px;
  margin: 0 auto;
  color: #767676;
  font-size: 16px;

  button[type='submit'] {
    margin: 0 35px;
  }
`;

export const FormInfoWrapper = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  padding: 35px;

  #regId {
    width: 346px;
  }

  input {
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    width: 100%;
    height: 54px;
    margin-bottom: 12px;
    padding: 17px 16px;

    &:focus {
      outline: 1px solid #21bf48;
    }
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  label {
    width: 100%;
    margin-bottom: 10px;
  }

  button {
    margin-left: auto;
  }

  .selectBox {
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    width: 152px;
    height: 54px;
    padding: 17px 50px;
  }

  .phoneNumBox {
    width: 152px;
    margin-left: auto;
  }

  .emailBox {
    width: 220px;
    margin: 0 auto;
    align-items: center;
  }
`;

export const CheckBoxWrapper = styled.div`
  padding: 34px 35px;
`;
