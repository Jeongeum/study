import { styled } from 'styled-components';

export const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 300px;
  margin: 30px auto;

  input {
    width: 250px;
    background-color: transparent;
    border: 1px solid #acb1c6;
    border-radius: 34px;
    padding: 12px 13px;
    margin-right: 9px;

    &:focus {
      outline: 1px solid #5179ef;
    }
  }

  button {
    width: 40px;
    height: 40px;
    background-color: #5179ef;
    border-radius: 50px;

    &:disabled {
      background-color: #acb1c6;
      cursor: default;
    }
  }
`;
