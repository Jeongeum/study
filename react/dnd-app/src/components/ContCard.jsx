import React from 'react';
import { ContCardWrapper } from './styled';

export const ContCard = ({
  children,
  provided,
  imgsrc,
  dragStart,
  dragEnter,
  drop,
  index,
}) => {
  return (
    <ContCardWrapper
      imgsrc={imgsrc}
      draggable
      // onDragStart={(e) => dragStart(e, index)}
      // onDragEnter={(e) => dragEnter(e, index)}
      // onDragEnd={drop}
      // onDragOver={(e) => e.preventDefault()}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {children}
    </ContCardWrapper>
  );
};
