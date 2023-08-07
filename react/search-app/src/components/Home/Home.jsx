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
  debounceKeyword,
}) => {
  return (
    <HomeWrapper>
      <Search
        onChangeHandler={onChangeHandler}
        onClickSearchHandler={onClickSearchHandler}
        onKeyDownHandler={onKeyDownHandler}
        debounceKeyword={debounceKeyword}
      />
      <PostList movieData={movieData} refState={refState} />
    </HomeWrapper>
  );
};
