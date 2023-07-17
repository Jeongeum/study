import axios from 'axios';

const baseURL = 'https://openmarket.weniv.co.kr';

const instance = axios.create({
  baseURL: baseURL,
  headers: { 'Content-Type': 'application/json' },
});

const accessInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 아이디 중복확인
export const postUserNameValid = async (formData) => {
  const response = await instance.post(
    '/accounts/signup/valid/username/',
    formData
  );
  return response.data;
};

// 회원가입
export const postUserSignup = async (formData) => {
  const response = await instance.post('/accounts/signup/', formData);
  return response.data;
};
