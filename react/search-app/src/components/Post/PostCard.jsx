import React from 'react';
import BasicImg from '../../assets/basic.png';

export const PostCard = ({ item }) => {
  const { Poster, Title } = item;

  return (
    <li>
      <img src={Poster === 'N/A' ? BasicImg : Poster} alt={`${Title} poster`} />
      <div>{Title}</div>
    </li>
  );
};
