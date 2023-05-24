import { useRef, useState } from "react";

export default function App() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  const textInput = useRef(null); // --- ⓵ useRef 생성

  const ClickBtn = () => {
    console.log("Click!");
  };

  const handleClickBtn = () => {
    textInput.current.focus(); // --- ⓷ useRef가 가리키는 input 태그에 포커스 이벤트 적용
  };
  return (
    <div className="App">
      {/* <button
        onClick={() => {
          setStateCount((prev) => prev + 1);
          console.log("stateCount :", stateCount);
        }}
      >
        state
      </button>
      <button
        onClick={() => {
          refCount.current += 1;
          console.log("refCount", refCount.current);
        }}
      >
        ref
      </button>

      <br />
      <br />
      <div>useState Count: {stateCount}</div>
      <div>useRef Count: {refCount.current}</div> */}
      <input type="text" />
      <input type="button" value="ref X" onClick={ClickBtn} />
      <br />
      <input type="text" ref={textInput} />
      <input type="button" value="ref O" onClick={handleClickBtn} />
    </div>
  );
}
