import React, { useState } from 'react';
import { ContHeader, ContListContainer, Wrapper } from './styled';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { ContCard } from './ContCard';
import { ImgBox } from './ImgBox';
import { AddBox } from './AddBox';

export const Beatifuldnd = () => {
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

  // 드래그 시작될 때
  // const dragStart = (e, position) => {
  //   dragItem.current = position;
  //   console.log('🖱 드래그 시작: ', e.target.alt);
  // };

  // 드래그 중인 대상이 위로 포개졌을 때
  // const dragEnter = (e, position) => {
  //   dragOverItem.current = position;
  //   console.log(e.target.alt, '에 포개짐');
  // };

  // const dragUpdate = (result) => {
  //   console.log(result);
  //   console.log('---');
  // };

  // 드래그를 끝냈을 때
  const drop = (info) => {
    console.log('--------------drop-------------');
    const { destination, draggableId, source } = info;
    const newImgList = [...imgList];

    if (!destination) return;
    console.log('⭐ 지금 드래그 중인 대상: ', newImgList[source.index]);
    console.log('⭐ 포개진 대상: ', newImgList[destination.index]);

    // const tmp = newImgList[source.index];
    // newImgList[source.index] = newImgList[destination.index];
    // newImgList[destination.index] = tmp;

    // if (!destination) return;

    const [movedItem] = newImgList.splice(source.index, 1);
    newImgList.splice(destination.index, 0, movedItem);

    console.log(
      '현재 드래그 중인 대상과 포개진 대상을 맞교환한 리스트: ',
      newImgList
    );
    setImgList(newImgList);
    console.log('🖱 드래그 끝!');
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
        <DragDropContext onDragEnd={drop}>
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
        </DragDropContext>
      </>
    </Wrapper>
  );
};
