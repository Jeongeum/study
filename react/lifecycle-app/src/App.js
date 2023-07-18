import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('3. 처음 렌더링되는 마운트 후');

    return () => {
      console.log('✅ Unmount');
      console.log('언마운트 될 때');
    };
  }, []);

  useEffect(() => {
    console.log('✅ Update');
    console.log('4. (리)렌더링 후');
    console.log('----------------');
  });

  console.log('✅ Mount');
  console.log('1. 컴포넌트 내부');
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(() => count + 1);
        }}
      >
        +1
      </button>
      {console.log('2. return')}
    </div>
  );
}
export default App;
