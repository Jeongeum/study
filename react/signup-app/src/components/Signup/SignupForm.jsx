import React from 'react';
import { TextCard } from '../common/TextCard/TextCard';
import { Button } from '../common/Button/Button';

export const SignupForm = ({
  signupValue,
  onSubmitHandler,
  onChangeHandler,
  emailMessage,
  passwordMessage,
}) => {
  const { email, password } = signupValue;
  return (
    <form onSubmit={onSubmitHandler}>
      <TextCard
        id="email"
        type="email"
        name="email"
        placeholder="이메일 주소를 입력해 주세요."
        value={email}
        onChange={onChangeHandler}
      >
        이메일
      </TextCard>
      <span>{emailMessage}</span>
      <TextCard
        id="password"
        type="password"
        name="password"
        placeholder="비밀번호를 설정해 주세요."
        value={password}
        onChange={onChangeHandler}
      >
        비밀번호
      </TextCard>
      <span>{passwordMessage}</span>
      <Button type="submit" disabled={!email || !password}>
        다음
      </Button>
    </form>
  );
};
