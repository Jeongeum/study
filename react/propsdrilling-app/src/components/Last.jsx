import React, { useContext } from 'react';
import { ContContext } from '../ContContext';

export const Last = () => {
  const cont = useContext(ContContext);
  return (
    <div>
      <h2>Last component!</h2>
      {cont === 'Hello, world!' ? '👋🏻' : '🎀'}
    </div>
  );
};
