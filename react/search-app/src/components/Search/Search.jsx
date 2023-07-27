import React from 'react';
import { InputWrapper, SearchWrapper } from './styled';
import LogoIcon from '../../assets/logo.png';
import SearchIcon from '../../assets/search.png';

export const Search = ({ onChangeHandler, onClickSearchHandler }) => {
  return (
    <SearchWrapper>
      <h2>
        <img src={LogoIcon} alt="로고" width="350px" />
      </h2>
      <InputWrapper>
        <input type="search" onChange={onChangeHandler} />
        <button onClick={onClickSearchHandler}>
          <img src={SearchIcon} alt="검색이미지" width="19px" />
        </button>
        {/* <p>키워드</p>
        <div>
          <button>마블</button>
          <button>애니</button>
          <button>마블</button>
          <button>마블</button>
          <button>마블</button>
          <button>마블</button>
        </div> */}
      </InputWrapper>
    </SearchWrapper>
  );
};
