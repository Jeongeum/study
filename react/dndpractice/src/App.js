import { useRef, useState } from 'react';

function App() {
  // 드래그할 때 발생
  const drag = (e) => {
    console.log('🖱 드래그: ', e.type);
  };

  // 드래그가 시작되는 순간 발생
  const dragStart = (e) => {
    console.log('🤚🏻 드래그 시작: ', e.type);
  };

  // 드래그가 끝날 때 발생 (마우스를 놓았을 때)
  const dragEnd = (e) => {
    console.log('🤚🏻 드래그 끝: ', e.type);
  };

  // 드래그하는 요소가 해당 이벤트를 지정한 요소에 진입했을 때 발생
  const dragEnter = (e) => {
    console.log('🙌🏻 드래그 요소 진입: ', e.type);
  };

  // 드래그하는 요소가 해당 이벤트를 지정한 요소에 들어갔다가 나갈 때 발생
  const dragLeave = (e) => {
    console.log('🙌🏻 드래그 요소 나감: ', e.type);
  };

  // 해당 이벤트가 지정된 요소에서 드래그가 이루어질 때 발생
  const dragOver = (e) => {
    e.preventDefault();
    e.target.innerHTML = '';
    e.target.innerHTML = '드래그 되는 중! 드롭이 되면 텍스트가 바뀔거에요🥴';
    console.log('드래그 이루어지는 중: ', e.type);
  };

  // 해당 이벤트가 지정된 요소에서 드래그를 끝내면 발생 (dragover 이벤트와 함께 사용)
  const drop = (e) => {
    e.target.innerHTML = '';
    e.target.innerHTML = 'drop!!';
    console.log('드롭: ', e.type);
  };

  return (
    <>
      <div>
        <p
          style={{
            backgroundColor: 'lightblue',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '300px',
            height: '150px',
            margin: '0 auto',
            fontSize: '25px',
            fontWeight: '600',
          }}
          draggable="true"
          // onDrag={drag}
          // onDragStart={dragStart}
          // onDragEnd={dragEnd}
        >
          💙드래그 할 아이템💙
        </p>
      </div>

      <div
        style={{
          backgroundColor: '#d9d9d9',
          height: '150px',
          width: '400px',
          margin: '20px auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        // onDragEnter={dragEnter}
        // onDragLeave={dragLeave}
        // onDragOver={dragOver}
        // onDrop={drop}
      >
        이곳에 드래그
      </div>
    </>
  );
}
export default App;
