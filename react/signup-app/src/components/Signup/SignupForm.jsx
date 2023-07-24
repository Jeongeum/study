import React from 'react';
import { TextCard } from '../common/TextCard/TextCard';

export const SignupForm = ({
  signupValue,
  onSubmitHandler,
  onChangeHandler,
}) => {
  return (
    <form>
      <TextCard
        id="email"
        type="email"
        placeholder="이메일 주소를 입력해 주세요."
      >
        이메일
      </TextCard>
      <TextCard
        id="password"
        type="password"
        placeholder="비밀번호를 설정해 주세요."
      >
        비밀번호
      </TextCard>
      <button type="submit">다음</button>
    </form>
  );
};
