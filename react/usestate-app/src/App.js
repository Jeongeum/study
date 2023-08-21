import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  let 일반변수 = 0;
  const [count, setCount] = useState(0);

  // 직접 변경
  const onClick_일반변수 = () => {
    일반변수 += 1;
    console.log('👍 Click => 일반변수 변경: ', 일반변수);
  };

  // state 사용
  const onClick_state = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  console.log('🔄 렌더링 => 일반변수: ', 일반변수, '/ count: ', count);

  useEffect(() => {
    console.log('state 변경: ', count);
  }, [count]);

  return (
    <>
      <h2>state 직접 변경</h2>
      {일반변수}
      <button onClick={onClick_일반변수}>+1</button>
      <h2>setState 사용</h2>
      {count}
      <button onClick={onClick_state}>+1</button>
    </>
  );
}
export default App;
