import React from 'react';
import { InputWrapper, SearchWrapper } from './styled';
import LogoIcon from '../../assets/logo.png';
import SearchIcon from '../../assets/search.png';

export const Search = React.memo(
  ({
    onChangeHandler,
    onClickSearchHandler,
    onKeyDownHandler,
    debounceKeyword,
  }) => {
    return (
      <SearchWrapper>
        <h2>
          <img src={LogoIcon} alt="로고" width="350px" />
        </h2>
        <InputWrapper>
          <input
            type="search"
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
          />
          <button onClick={onClickSearchHandler} disabled={!debounceKeyword}>
            <img src={SearchIcon} alt="검색이미지" width="19px" />
          </button>
        </InputWrapper>
      </SearchWrapper>
    );
  }
);
