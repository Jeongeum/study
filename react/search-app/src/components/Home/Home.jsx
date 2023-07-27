import React from 'react';
import { Search } from '../Search/Search';
import { PostList } from '../Post/PostList';
import { HomeWrapper } from './styled';

export const Home = ({ onChangeHandler, onClickSearchHandler, movieData }) => {
  return (
    <HomeWrapper>
      <Search
        onChangeHandler={onChangeHandler}
        onClickSearchHandler={onClickSearchHandler}
      />
      <PostList movieData={movieData} />
    </HomeWrapper>
  );
};
