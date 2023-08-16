import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  useSensor,
  useSensors,
  MouseSensor,
  DragOverlay,
} from '@dnd-kit/core';
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

import { ContHeader, OverlayCardWrapper, Wrapper } from './components/styled';
import { ImgBox } from './components/ImgBox';
import { AddBox } from './components/AddBox';

function App() {
  const [activeId, setActiveId] = useState(null);
  const [imgName, setImgName] = useState(new Array(4).fill(null));
  const [imgList, setImgList] = useState(
    new Array(4).fill({
      id: 1,
      src: null,
      name: '',
    })
  );

  const onClickInputFileHandler = (index) => {
    const inputEl = document.getElementById(`input_${index}`);
    inputEl.click();
  };

  const onChangeImgHandler = (index, e) => {
    const newList = [...imgList];
    const newImgName = [...imgName];

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      newList[index] = { id: index + 1, src: reader.result, name: file.name };
      newImgName[index] = file.name;

      setImgList(newList);
      setImgName(newImgName);
    };
  };

  const onClickDeleteHandler = (index) => {
    const newDeleteList = [...imgList];

    newDeleteList[index] = { id: 1, src: null, name: '' };

    setImgList(newDeleteList);
  };

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (e) => {
    console.log(e);
    setActiveId(() => e.active.id);
  };

  const handleDragEnd = (event) => {
    setActiveId(() => null);
    const { active, over } = event;

    if (active.id !== over.id) {
      setImgList((imgList) => {
        const oldIndex = imgList.findIndex((item) => item.id === active.id);
        const newIndex = imgList.findIndex((item) => item.id === over.id);

        return arrayMove(imgList, oldIndex, newIndex);
      });
    }
  };

  return (
    <Wrapper>
      <>
        <ContHeader>
          <h2>
            상단에 고정할 <br />
            콘텐츠를 선택해주세요.
          </h2>
          <p>설정 시, 내 채널 콘텐츠 상단에 4개까지 보여줍니다.</p>
        </ContHeader>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={imgList}
            // items={imgList.map((item, index) => item.id)}
            strategy={rectSortingStrategy}
          >
            {imgList.map((image, index) =>
              image.src ? (
                <ImgBox
                  key={index}
                  imgsrc={image.src}
                  imgname={image.name}
                  onClickDeleteHandler={onClickDeleteHandler}
                  index={index}
                  image={image}
                />
              ) : (
                <AddBox
                  key={index}
                  onClickInputFileHandler={onClickInputFileHandler}
                  onChangeImgHandler={onChangeImgHandler}
                  index={index}
                />
              )
            )}
            <DragOverlay>
              {activeId ? (
                <OverlayCardWrapper
                  $overlaysrc={imgList.find((item) => item.id === activeId)}
                ></OverlayCardWrapper>
              ) : null}
            </DragOverlay>
          </SortableContext>
        </DndContext>
      </>
    </Wrapper>
  );
}
export default App;
