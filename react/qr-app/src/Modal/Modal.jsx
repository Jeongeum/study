import { styled } from 'styled-components';

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
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

  button {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }

  .qrwrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 230px;
    height: 260px;
    margin: 50px auto;

    video {
      width: 100%;
      border-radius: 20px;
    }
  }
`;
