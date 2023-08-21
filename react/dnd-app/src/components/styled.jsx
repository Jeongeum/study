import { styled } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-flow: wrap;
  width: 510px;
  margin: 20px auto;
  padding: 10px;
  gap: 10px;

  border: 1px solid #d9d9d9;
`;

export const ContHeader = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #1f272d;
    margin-bottom: 10px;
  }

  p {
    font-size: 13px;
    color: #797d81;
  }
`;

export const ContListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  gap: 10px;
`;

export const ContCardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 235px;
  height: 235px;
  border: 1px solid ${(props) => (props.imgsrc ? 'none' : '#59bfb3')};
  border-radius: 10px;
`;

export const ContImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const DeleteIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  width: 20px;
`;

export const AddBtn = styled.button`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #5c5c5c;

  img {
    width: 30px;
  }
`;

export const InputFile = styled.input`
  display: none;
`;

export const OverlayCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-image: url(${(props) => props.$overlaysrc.src});
  background-repeat: no-repeat;
  background-size: contain;
`;
