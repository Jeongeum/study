import { useRef, useState } from 'react';

function App() {
  const dragItem = useRef(); // 드래그할 아이템의 인덱스
  const dragOverItem = useRef(); // 드랍할 위치의 아이템의 인덱스
  const [list, setList] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    // 'Item 5',
    // 'Item 6',
  ]);

  // 드래그 시작될 때 실행
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log('드래그 시작 : ', e.target.innerHTML);
  };

  // 드래그중인 대상이 위로 포개졌을 때
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML, '에 포개짐 🙈');
  };

  // 드랍 (커서를 뗐을 때)
  const drop = (e) => {
    const newList = [...list];
    console.log('복사해온 기존 리스트: ', newList);
    const dragItemValue = newList[dragItem.current];
    console.log('현재 드래그 중인 대상: ', dragItemValue);
    console.log('포개진 대상: ', newList[dragOverItem.current]);
    newList.splice(dragItem.current, 1);
    console.log('현재 드래그 중인 대상을 삭제한 리스트: ', newList);
    newList.splice(dragOverItem.current, 0, dragItemValue);
    console.log(
      '포개진 대상 자리에 드래그 중인 대상을 넣었을 때 리스트: ',
      newList
    );
    dragItem.current = null;
    dragOverItem.current = null;
    setList(newList);
  };
  return (
    <>
      {list &&
        list.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'lightblue',
              margin: '20px auto',
              textAlign: 'center',
              fontSize: '30px',
            }}
            draggable
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            onDragOver={(e) => e.preventDefault()}
          >
            {item}
          </div>
        ))}
    </>
  );
}
export default App;
