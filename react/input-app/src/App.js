import { Table } from "./components/Table/Table";

function App() {
  const d = new Date();
  const year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();

  if (month <= 9) month = `0${month}`;
  if (day <= 9) month = `0${day}`;

  const date = `${year}-${month}-${day}`;

  const data = [
    {
      no: 1,
      title: "안녕하세요? 최고 귀여운 춘식입니다.",
      name: "춘식",
      date: date,
    },
    {
      no: 2,
      title: "오늘은 체크박스 체크 시 li에 변화를 줘보았습니다.",
      name: "정음",
      date: date,
    },
    {
      no: 3,
      title: "리액트는 정말 어려운 것 같아요.",
      name: "고심이",
      date: date,
    },
    {
      no: 4,
      title: "벌써 4월말입니다. 시간이 너무 빠르네요.",
      name: "정음",
      date: date,
    },
    {
      no: 5,
      title: "임의로 데이터를 만들어보았습니다. 연습용이에요!",
      name: "정음",
      date: date,
    },
  ];
  return (
    <div>
      <h1>체크박스 체크 시 li 변화시키기</h1>
      <Table data={data} />
    </div>
  );
}
export default App;
