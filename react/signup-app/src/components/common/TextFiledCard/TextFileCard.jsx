import React from 'react';

export const TextFileCard = ({
  children,
  id,
  name,
  type,
  onChange,
  onClick,
  value,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        name={name}
        id={id}
        type={type}
        onChange={onChange}
        onClick={onClick}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};
