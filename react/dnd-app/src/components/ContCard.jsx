import React from 'react';
import { ContCardWrapper } from './styled';

export const ContCard = ({ children, imgvalue }) => {
  return <ContCardWrapper imgvalue={imgvalue}>{children}</ContCardWrapper>;
};
