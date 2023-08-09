import React from 'react';
import { ContCardWrapper } from './styled';

export const ContCard = ({
  children,
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
      onDragStart={(e) => dragStart(e, index)}
      onDragEnter={(e) => dragEnter(e, index)}
      onDragEnd={drop}
      onDragOver={(e) => e.preventDefault()}
    >
      {children}
    </ContCardWrapper>
  );
};
