import { useEffect, useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  // input 입력
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onClickAddTodo = (e) => {
    if (inputValue && e.key === "Enter") {
      console.log("🚨enter!!");
      console.log("✨엔터 이벤트 발생", e.target.value);
      console.log("엔터 후 isComposing", e.nativeEvent.isComposing);
      setData((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: inputValue,
          etc: "keyDown",
        },
      ]);
      setInputValue("");
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <h2>한글</h2>
      onKeyDown :
      <input
        value={inputValue}
        onChange={onChangeInput}
        onKeyDown={(e) => onClickAddTodo(e)}
      ></input>
      onKeyUp:
      <input
        value={inputValue}
        onChange={onChangeInput}
        onKeyUp={(e) => onClickAddTodo(e)}
      ></input>
      <h2>영어</h2>
      onKeyDown :
      <input
        value={inputValue}
        onChange={onChangeInput}
        onKeyDown={(e) => onClickAddTodo(e)}
      ></input>
      onKeyUp:
      <input
        value={inputValue}
        onChange={onChangeInput}
        onKeyUp={(e) => onClickAddTodo(e)}
      ></input>
      <h2>isComposing 사용하기</h2>
      onKeyDown :
      <input
        onChange={onChangeInput}
        onKeyDown={(e) => onClickAddTodo(e)}
      ></input>
      <h3>목록</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
