import React from 'react';

import { PostCard } from './PostCard';
import { PostListWrapper } from './styled';

export const PostList = ({ movieData, refState }) => {
  return (
    <PostListWrapper>
      {movieData.length > 0 && (
        <ul>
          {movieData?.map((item) => {
            return <PostCard item={item} key={item.imdbID} />;
          })}
          <div ref={refState}></div>
        </ul>
      )}
    </PostListWrapper>
  );
};
