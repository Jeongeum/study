import { styled } from 'styled-components';

export const Modal = styled.div`
  width: 430px;
  height: 530px;
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  p {
    padding: 10px;
    font-weight: 600;
  }

  .modalheader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    button {
      background-color: transparent;
      border: none;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
