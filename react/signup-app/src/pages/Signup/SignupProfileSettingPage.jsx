import React, { useState } from 'react';
import { Wrapper } from '../../components/common/Wrapper';
import { SignupWrapper } from './styled';
import { ProfileSettingForm } from '../../components/Signup/ProfileSettingForm';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  postUserProfileImg,
  userProfileImg,
} from '../../api/profileSetting/postProfileImg';
import { url } from '../../api/axiosBase';
import { postAccountNameValid } from '../../api/profileSetting/postAccountNameValid';
import { postUserInfo } from '../../api/profileSetting/postUserInfo';

export const SignupProfileSettingPage = () => {
  const location = useLocation();
  const userEmail = location.state.email;
  const userPassword = location.state.password;
  const [profileImgSrc, setProfileImgSrc] = useState('');
  const [isValidUserName, setIsValidUserName] = useState(false);
  const [isValidAccountName, setIsValidAccountName] = useState(false);
  const [userNameMessage, setUserNameMessage] = useState('');
  const [accountMessage, setAccountMessage] = useState('');
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    username: '',
    email: userEmail,
    password: userPassword,
    accountname: '',
    intro: '',
    image: '',
  });

  const isValid = (target, value) => {
    if (target === 'username') {
      if (value.length < 2 || (value.length > 10 && value.length !== '')) {
        setIsValidUserName(false);
        setUserNameMessage('2~10자 이내로 입력해주세요.');
      } else {
        setIsValidUserName(true);
        setUserNameMessage('');
      }
    } else if (target === 'accountname') {
      const reg = /^[a-z0-9A-Z_.]{2,16}$/;
      if (!reg.test(value)) {
        setIsValidAccountName(false);
        setAccountMessage('영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.');
      } else {
        setIsValidAccountName(true);
        setAccountMessage('');
      }
    }
  };

  // onChangeImgHandler : input 대신 파일 업로드 이미지 클릭 시 사진 선택
  const onChangeImgHandler = (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    postUserProfileImg(formData).then((res) => {
      console.log(res);
      if (!res.message) {
        setProfileImgSrc(`${url}/${res.filename}`);
      }
    });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    isValid(name, value);

    console.log(inputValue);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // 계정 검증
    const accountData = {
      user: {
        accountname: inputValue.accountname,
      },
    };
    console.log(accountData);
    postAccountNameValid(JSON.stringify(accountData)).then((res) => {
      if (res.message === '이미 가입된 계정ID 입니다.') {
        setAccountMessage(res.message);
      } else if (res.message === '사용 가능한 계정ID 입니다.') {
        setAccountMessage(res.message);
        navigate('/login', { state: inputValue.accountname });
      }
    });

    const data = {
      user: {
        ...inputValue,
        image: profileImgSrc,
      },
    };

    console.log(data);
    postUserInfo(JSON.stringify(data)).then((res) => {
      console.log(res);
    });
  };

  return (
    <Wrapper>
      <SignupWrapper>
        <h2>프로필 설정</h2>
        <p>나중에 언제든지 변경할 수 있어요!</p>
        <ProfileSettingForm
          onChangeImgHandler={onChangeImgHandler}
          onChangeHandler={onChangeHandler}
          onSubmitHandler={onSubmitHandler}
          profileImgSrc={profileImgSrc}
          inputValue={inputValue}
          userNameMessage={userNameMessage}
          accountMessage={accountMessage}
        />
      </SignupWrapper>
    </Wrapper>
  );
};
