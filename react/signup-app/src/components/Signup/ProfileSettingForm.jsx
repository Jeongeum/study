import React, { useRef } from 'react';
import { TextCard } from '../common/TextCard/TextCard';
import { Img } from '../common/Img/Img';
import baseProfileIcon from '../../assets/images/basic-profile-img.png';
import uploadFileeIcon from '../../assets/images/upload-file.png';
import { ProfileImgWrapper } from '../../pages/Signup/styled';
import { Button } from '../common/Button/Button';

export const ProfileSettingForm = ({
  onChangeImgHandler,
  onChangeHandler,
  onSubmitHandler,
  profileImgSrc,
  inputValue,
  userNameMessage,
  accountMessage,
}) => {
  // onChangeImgHandler : input 대신 파일 업로드 이미지 클릭 시 사진 선택
  const imgInput = useRef(null);
  const { username, accountname } = inputValue;

  const onClickImg = (e) => {
    e.preventDefault();
    imgInput.current.click();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <ProfileImgWrapper>
        <Img
          src={profileImgSrc || baseProfileIcon}
          alt="기본 프로필 이미지"
          width="110px"
          id="imgpreview"
        />
        <button onClick={onClickImg}>
          <Img
            src={uploadFileeIcon}
            alt="이미지 클릭 시 프로필 사진 선택 가능"
            width="36px"
            id="upload"
          />
        </button>
        <input
          type="file"
          accept="image/*"
          name="image"
          ref={imgInput}
          onChange={onChangeImgHandler}
        />
      </ProfileImgWrapper>
      <TextCard
        id="username"
        type="text"
        name="username"
        placeholder="2~10자 이내여야 합니다."
        onChange={onChangeHandler}
      >
        사용자 이름
      </TextCard>
      <span>{userNameMessage}</span>
      <TextCard
        id="accountname"
        type="text"
        name="accountname"
        placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        onChange={onChangeHandler}
      >
        계정 ID
      </TextCard>
      <span>{accountMessage}</span>
      <TextCard
        id="intro"
        type="text"
        name="intro"
        placeholder="자기 소개를 작성해주세요!"
        onChange={onChangeHandler}
      >
        소개
      </TextCard>
      <Button type="submit" disabled={!username || !accountname}>
        시작하기
      </Button>
    </form>
  );
};
