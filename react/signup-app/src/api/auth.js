import { instance } from './axiosBase';

// 이메일 검증
export const userEmailValid = async (data) => {
  const response = await instance.post('/user/emailvalid', data);
  return response.data;
};

// 프로필설정 시 계정 검증
export const userAccountValid = async (data) => {
  const response = await instance.post('/user/accountnamevalid', data);
  return response.data;
};

// 회원가입
export const userSignup = async (data) => {
  console.log(data);
  const response = await instance.post('/user', data);

  return response.data;
};

// 로그인
export const userLogin = async (data) => {
  const response = await instance.post('/user/login', data);
  return response.data;
};
