import React from 'react';
import { TextCard } from '../common/TextCard/TextCard';
import { Button } from '../common/Button/Button';

export const LoginForm = () => {
  return (
    <form>
      <TextCard id="email" type="email">
        이메일
      </TextCard>
      <TextCard id="password" type="password">
        비밀번호
      </TextCard>
      <Button type="submit">로그인</Button>
    </form>
  );
};
