import React from 'react';
import { TextCardWrapper, TextInput, TextLabel } from './styled';

export const TextCard = ({
  children,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  onClick,
}) => {
  return (
    <TextCardWrapper>
      <TextLabel htmlFor={id}>{children}</TextLabel>
      <TextInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
    </TextCardWrapper>
  );
};
