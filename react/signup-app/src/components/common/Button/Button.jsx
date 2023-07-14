import { css, styled } from 'styled-components';

const setSize = (size) => {
  switch (size) {
    case 'large':
      return css`
        padding: 19px 0;
        font-size: 24px;
        height: 68px;
      `;
    case 'medium':
      return css`
        padding: 19px 0;
        font-size: 18px;
        height: 60px;
      `;
    case 'ms':
      return css`
        padding: 17px 0;
        font-size: 16px;
        height: 54px;
      `;
    default:
      return css`
        padding: 10px 0;
        height: 40px;
      `;
  }
};

export const Button = styled.button`
  width: ${(props) => props.width || '80px'};
  padding: ${(props) => props.padding || '10px 0'};
  font-size: 16px;
  line-height: 20px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.backColor || '#21BF48'};
  color: ${(props) => props.color || '#FFFFFF'};
  cursor: pointer;

  &:disabled {
    background-color: #c4c4c4;
    cursor: default;
  }
  ${({ size }) => setSize(size)}
`;
