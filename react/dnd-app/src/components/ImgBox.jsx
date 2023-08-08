import React from 'react';
import { ContImg, DeleteIcon } from './styled';
import deleteIcon from '../assets/delete.png';
// 이미지 등록 후 이미지가 미리보기로 보여지면 여기에서 드래그앤드롭 가능
// 이미지 등록 전 + 표시가 있을 때에는 드래그앤드롭 불가능 (AddContCard)
export const ImgBox = ({ image, onClickDeleteHandler, index }) => {
  return (
    <>
      <ContImg src={image} alt="이미지" />
      <DeleteIcon
        src={deleteIcon}
        alt="이미지 삭제"
        onClick={() => onClickDeleteHandler(index)}
      />
    </>
  );
};
