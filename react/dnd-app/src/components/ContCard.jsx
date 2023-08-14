import React from 'react';
import { ContCardWrapper } from './styled';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const ContCard = ({ children, imgsrc, index }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: index });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <ContCardWrapper
      imgsrc={imgsrc}
      draggable
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      {children}
    </ContCardWrapper>
  );
};
