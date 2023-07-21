// import { useState, useEffect } from 'react';

// // 함수의 동등성
// // 함수는 javaScript에서 객체로 취급되기 때문에 동일한 함수를 만들더라도 메모리 주소가 달라서 다른 함수로 간주된다. (메모리 주소로 참조 비교 진행)

// function App({ id }) {
//   const [data, setData] = useState(null);

//   const fetchData = () =>
//     // fetchData는 함수여서 렌더링 될 때마다 새로운 참조값으로 변경 (함수의 동등성 때문에)
//     fetch(`https://test-api.com/data/${id}`)
//       .then((response) => response.json())
//       .then(({ data }) => data);

//   useEffect(() => {
//     fetchData().then((data) => setData(data));
//   }, [fetchData]); // fetchData 함수가 바뀌었으니 매번 useEffect 실행 -> 무한루프

//   // ...
// }

// export default App;

import { useCallback } from 'react';
import { useState, useEffect } from 'react';

function App({ id }) {
  const [data, setData] = useState(null);

  const fetchData = useCallback(() =>
    fetch(`https://test-api.com/data/${id}`)
      .then((response) => response.json())
      .then(({ data }) => data)
  );

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, [fetchData]);

  // ...
}

export default App;
