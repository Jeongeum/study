import React from 'react';
import { TextCard } from '../common/TextCard/TextCard';
import { Button } from '../common/Button/Button';

export const LoginForm = ({
  loginValue,
  onChangeHandler,
  onSubmitHandler,
  loginMessage,
}) => {
  const { email, password } = loginValue;
  return (
    <form onSubmit={onSubmitHandler}>
      <TextCard id="email" type="email" name="email" onChange={onChangeHandler}>
        이메일
      </TextCard>
      <TextCard
        id="password"
        type="password"
        name="password"
        onChange={onChangeHandler}
      >
        비밀번호
      </TextCard>
      <span>{loginMessage}</span>
      <Button type="submit" disabled={!email || !password}>
        로그인
      </Button>
    </form>
  );
};
