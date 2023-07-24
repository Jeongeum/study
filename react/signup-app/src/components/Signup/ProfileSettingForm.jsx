import React from 'react';
import { TextCard } from '../common/TextCard/TextCard';
import { Img } from '../common/Img';
import baseProfileIcon from '../../assets/images/basic-profile-img.png';
import uploadFileeIcon from '../../assets/images/upload-file.png';
import { ProfileImgWrapper } from '../../pages/Signup/styled';
export const ProfileSettingForm = ({ onClickUploadHandler }) => {
  // onClickUploadHandler : input 대신 파일 업로드 이미지 클릭 시 사진 선택
  return (
    <form>
      <ProfileImgWrapper>
        <Img src={baseProfileIcon} alt="기본 프로필 이미지" />
        <Img
          src={uploadFileeIcon}
          alt="파일 업로드 이미지"
          width="36px"
          className="upload"
        />
        <input type="file" />
      </ProfileImgWrapper>
      <TextCard id="username" type="text" placeholder="2~10자 이내여야 합니다.">
        사용자 이름
      </TextCard>
      <TextCard
        id="userid"
        type="text"
        placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
      >
        계정 ID
      </TextCard>
      <TextCard
        id="userinfo"
        type="text"
        placeholder="자기 소개를 작성해주세요!"
      >
        소개
      </TextCard>
      <button type="submit">시작하기</button>
    </form>
  );
};
