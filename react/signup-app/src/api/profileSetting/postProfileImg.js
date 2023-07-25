import { imgInstance } from '../axiosBase';

// 프로필 설정 시 이미지
export const postUserProfileImg = async (formData) => {
  const response = await imgInstance.post('/image/uploadfile', formData);
  return response.data;
};
