import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

import { ContHeader, Wrapper } from './components/styled';
import { ImgBox } from './components/ImgBox';
import { AddBox } from './components/AddBox';

function App() {
  const [imgName, setImgName] = useState(new Array(4).fill(null));
  const [imgList, setImgList] = useState(
    new Array(4).fill({
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
      newList[index] = { src: reader.result, name: file.name };
      newImgName[index] = file.name;

      setImgList(newList);
      setImgName(newImgName);
    };
  };

  const onClickDeleteHandler = (index) => {
    const newDeleteList = [...imgList];

    newDeleteList[index] = { src: null, name: '' };

    setImgList(newDeleteList);
  };
  // -------------------------------------

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log('active: ', active);
    console.log('over: ', over);

    if (active.id !== over.id) {
      console.log(active.id, over.id);
      setImgList((imgList) => {
        const oldIndex = imgList.indexOf(active.id); // imgList 배열에 active.id와 같은게 있으면 그 배열의 인덱스 반환, 없으면 -1 반환
        const newIndex = imgList.indexOf(over.id);
        console.log(oldIndex, newIndex);
        return arrayMove(imgList, oldIndex, newIndex);
      });
      setImgName((imgName) => {
        const oldIndex = imgName.indexOf(active.id) + 1;
        const newIndex = imgName.indexOf(over.id) + 1;

        return arrayMove(imgName, oldIndex, newIndex);
      });
    }
    console.log(imgName);
    console.log(imgList);
  };

  // -------------------------------------
  // 드래그를 끝냈을 때
  // const drop = (info) => {
  //   console.log('--------------drop-------------');
  //   const { destination, draggableId, source } = info;
  //   const newImgList = [...imgList];

  //   if (!destination) return;
  //   console.log('⭐ 지금 드래그 중인 대상: ', newImgList[source.index]);
  //   console.log('⭐ 포개진 대상: ', newImgList[destination.index]);

  //   // const tmp = newImgList[source.index];
  //   // newImgList[source.index] = newImgList[destination.index];
  //   // newImgList[destination.index] = tmp;

  //   // if (!destination) return;

  //   const [movedItem] = newImgList.splice(source.index, 1);
  //   newImgList.splice(destination.index, 0, movedItem);

  //   console.log(
  //     '현재 드래그 중인 대상과 포개진 대상을 맞교환한 리스트: ',
  //     newImgList
  //   );
  //   setImgList(newImgList);
  //   console.log('🖱 드래그 끝!');
  // };

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
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={imgList} strategy={rectSortingStrategy}>
            {imgList.map((image, index) =>
              image.src ? (
                <ImgBox
                  key={index}
                  imgsrc={image.src}
                  imgname={image.name}
                  onClickDeleteHandler={onClickDeleteHandler}
                  index={index}
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
          </SortableContext>
        </DndContext>

        {/* ----------------- */}
        {/* <DragDropContext onDragEnd={drop}>
          <Droppable droppableId="imageList">
            {(provided, snapshot) => (
              <ContListContainer
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {imgList.map(
                  (image, index) => (
                    console.log(
                      'drag요소가 내 위에 있나요? :',
                      snapshot.isDraggingOver
                    ),
                    console.log(
                      '내 위로 지나가는 drag요소의 ID는? :',
                      snapshot.draggingOverWith
                    ),
                    console.log(
                      '여기서 출발하는 drag요소의 ID는? :',
                      snapshot.draggingFromThisWith
                    ),
                    console.log(
                      'placeholder 사용중인가요? :',
                      snapshot.isUsingPlaceholder
                    ),
                    console.log('-------------------------------'),
                    (
                      <Draggable
                        key={index}
                        draggableId={index.toString()}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          console.log(
                            '제가 drag 되고 있나요? :',
                            snapshot.isDragging
                          ),
                          console.log(
                            'dropAnimation이 진행중인가요? :',
                            snapshot.isDropAnimating
                          ),
                          console.log(
                            'dropAnimation에 대한 정보 :',
                            snapshot.dropAnimation
                          ),
                          console.log(
                            '지금 어떤 droppable위를 지나가고 있나요?',
                            snapshot.draggingOver
                          ),
                          (
                            <ContCard
                              key={index}
                              imgsrc={image.src}
                              index={index}
                              provided={provided}
                            >
                              {image.src ? (
                                <ImgBox
                                  imgsrc={image.src}
                                  imgname={image.name}
                                  onClickDeleteHandler={onClickDeleteHandler}
                                  index={index}
                                />
                              ) : (
                                <AddBox
                                  onClickInputFileHandler={
                                    onClickInputFileHandler
                                  }
                                  onChangeImgHandler={onChangeImgHandler}
                                  index={index}
                                />
                              )}
                            </ContCard>
                          )
                        )}
                      </Draggable>
                    )
                  )
                )}
                {provided.placeholder}
              </ContListContainer>
            )}
          </Droppable>
        </DragDropContext> */}
      </>
    </Wrapper>
  );
}
export default App;
