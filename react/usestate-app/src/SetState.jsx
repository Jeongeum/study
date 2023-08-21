import { useState } from 'react';

export const SetState = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const onClickCount = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  const onClickCount2 = () => {
    setCount2((count2) => count2 + 1);
    setCount2((count2) => count2 + 1);
  };

  console.log('count: ', count, '/ count2: ', count2);
  return (
    <>
      <h1>useState 실습하기</h1>
      <h2>일반형</h2>
      {count}
      <button onClick={onClickCount}>+1</button> <br></br>
      <h2>함수형 업데이트</h2>
      {count2}
      <button onClick={onClickCount2}>+1</button>
    </>
  );
};
