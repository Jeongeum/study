import React from 'react';
import addIcon from '../assets/addIcon.png';
// import addIcon2 from '../assets/add.png';

export const AddContCard = ({ imgRef, onChangeImgHandler, imgSrc }) => {
  const onClickInputFileHandler = (e) => {
    e.preventDefault();
    imgRef.current.click();
  };

  return (
    <div className="AddContCardBox">
      {imgSrc ? (
        <img src={imgSrc} alt="이미지" className="ContImg" />
      ) : (
        <>
          <button className="AddBtn" onClick={onClickInputFileHandler}>
            <img src={addIcon} alt="등록하기 아이콘" />
            {/* <img src={addIcon2} alt="등록하기 아이콘" /> */}
            등록하기
          </button>
          <input
            type="file"
            accept="image/*"
            id="inputFile"
            ref={imgRef}
            onChange={onChangeImgHandler}
          />
        </>
      )}
    </div>
  );
};
