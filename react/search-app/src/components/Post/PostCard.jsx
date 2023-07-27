import React from 'react';

export const PostCard = ({ item }) => {
  const { Poster, Title, Year } = item;

  return (
    <li>
      <img src={Poster} alt={`${Title} poster`} />
      {Title} | {Year}
    </li>
  );
};
