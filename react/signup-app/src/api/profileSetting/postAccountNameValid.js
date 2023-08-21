import { instance } from '../axiosBase';

// 계정 검증
export const postAccountNameValid = async (data) => {
  const response = await instance.post('/user/accountnamevalid', data);
  return response.data;
};
