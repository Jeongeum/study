import React from 'react';
import addIcon from '../assets/add.png';
import { AddBtn, ContCardWrapper, InputFile } from './styled';

export const AddBox = ({
  onClickInputFileHandler,
  onChangeImgHandler,
  index,
}) => {
  return (
    <ContCardWrapper>
      <AddBtn onClick={() => onClickInputFileHandler(index)}>
        <img src={addIcon} alt="등록하기 아이콘" />
        등록하기
      </AddBtn>
      <InputFile
        type="file"
        accept="image/*"
        id={`input_${index}`}
        onChange={(e) => onChangeImgHandler(index, e)}
      />
    </ContCardWrapper>
  );
};
