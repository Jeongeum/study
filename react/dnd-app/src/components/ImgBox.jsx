import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { ContCardWrapper, ContImg, DeleteIcon } from './styled';
import deleteIcon from '../assets/delete.png';
import { CSS } from '@dnd-kit/utilities';
// 이미지 등록 후 이미지가 미리보기로 보여지면 여기에서 드래그앤드롭 가능
// 이미지 등록 전 + 표시가 있을 때에는 드래그앤드롭 불가능 (AddContCard)
export const ImgBox = ({
  imgsrc,
  imgname,
  onClickDeleteHandler,
  index,
  image,
}) => {
  const altName = imgname.trim().replace(/(.png|.jpg|.jpeg|.gif)$/, '');
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: image.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'pointer',
    zIndex: isDragging ? '100' : 'auto',
    opacity: isDragging ? 0.3 : 1,
  };
  return (
    <ContCardWrapper
      ref={setNodeRef}
      style={style}
      imgsrc={imgsrc}
      {...attributes}
      {...listeners}
    >
      <ContImg src={imgsrc} alt={altName} />
      <DeleteIcon
        src={deleteIcon}
        alt="이미지 삭제"
        onClick={() => onClickDeleteHandler(index)}
      />
    </ContCardWrapper>
  );
};
