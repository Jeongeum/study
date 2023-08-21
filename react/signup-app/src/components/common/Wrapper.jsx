import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  max-width: 768px;
  height: 100vh;
  margin: 0 auto;
  background-color: ${(props) => props.$backgroundColor};
`;
