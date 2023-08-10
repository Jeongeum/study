import React from 'react';
import { ContCardWrapper } from './styled';

export const ContCard = ({ children, provided, imgsrc }) => {
  return (
    <ContCardWrapper
      imgsrc={imgsrc}
      draggable
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {children}
    </ContCardWrapper>
  );
};
