import { styled } from 'styled-components';

export const Button = styled.button`
  width: 100%;
  border-radius: 44px;
  padding: 13px;
  margin-top: 14px;

  background-color: #f26e22;
  color: #ffffff;

  &:disabled {
    background-color: #ffc7a7;
  }
`;
