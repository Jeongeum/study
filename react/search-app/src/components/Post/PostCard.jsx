import React from 'react';
import BasicImg from '../../assets/basic.png';

export const PostCard = React.memo(({ item }) => {
  const { Poster, Title } = item;
  const onErrorImg = (e) => {
    e.target.src = BasicImg;
  };

  return (
    <li>
      <img
        src={Poster === 'N/A' ? BasicImg : Poster}
        alt={`${Title} poster`}
        onError={onErrorImg}
      />
      <div>{Title}</div>
    </li>
  );
});
