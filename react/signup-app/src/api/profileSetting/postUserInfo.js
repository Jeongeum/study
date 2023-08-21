import { instance } from '../axiosBase';

// 최종 회원가입
export const postUserInfo = async (data) => {
  const response = await instance.post('/user', data);
  return response.data;
};
