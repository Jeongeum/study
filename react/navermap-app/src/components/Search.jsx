import React from 'react';

export const Search = ({ onSubmitHandler, onClickHandler }) => {
  return (
    <form
      onSubmit={onSubmitHandler}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '500px',
        margin: '10px 0',
      }}
    >
      <input
        type="text"
        placeholder="ex) 서울시 or 봉은사로55길 20"
        style={{ width: '350px', padding: '10px' }}
      />
      <button type="button" onClick={onClickHandler} style={{ width: '120px' }}>
        주소 검색
      </button>
    </form>
  );
};
