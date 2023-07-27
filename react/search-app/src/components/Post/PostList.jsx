import React from 'react';
import { PostCard } from './PostCard';
import { PostListWrapper } from './styled';

export const PostList = ({ movieData }) => {
  return (
    <PostListWrapper>
      <ul>
        {movieData?.map((item) => {
          return <PostCard item={item} key={item.imdbID} />;
        })}
      </ul>
    </PostListWrapper>
  );
};
