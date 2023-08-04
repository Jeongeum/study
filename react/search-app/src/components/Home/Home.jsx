import React from 'react';
import { Search } from '../Search/Search';
import { PostList } from '../Post/PostList';
import { HomeWrapper } from './styled';

export const Home = ({
  onChangeHandler,
  onClickSearchHandler,
  onKeyDownHandler,
  movieData,
  refState,
}) => {
  return (
    <HomeWrapper>
      <Search
        onChangeHandler={onChangeHandler}
        onClickSearchHandler={onClickSearchHandler}
        onKeyDownHandler={onKeyDownHandler}
      />
      <PostList movieData={movieData} refState={refState} />
    </HomeWrapper>
  );
};
