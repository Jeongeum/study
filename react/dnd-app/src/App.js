import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import addIcon from './assets/add.png';
import {
  AddBtn,
  ContHeader,
  ContListContainer,
  InputFile,
  Wrapper,
} from './components/styled';
import { ImgBox } from './components/ImgBox';
import { ContCard } from './components/ContCard';

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
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    const newList = [...imgList];

    const newImgName = [...imgName];

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

  // 드래그를 끝냈을 때
  const drop = (info) => {
    const { destination, draggableId, source } = info;
    const newImgList = [...imgList];

    if (!destination) return;
    console.log('⭐ 지금 드래그 중인 대상: ', newImgList[source.index]);
    console.log('⭐ 포개진 대상: ', newImgList[destination.index]);

    const tmp = newImgList[source.index];
    newImgList[source.index] = newImgList[destination.index];
    newImgList[destination.index] = tmp;

    // if (!destination) return;

    // const [movedItem] = newImgList.splice(source.index, 1);
    // newImgList.splice(destination.index, 0, movedItem);

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
                {imgList.map((image, index) => (
                  <Draggable
                    key={index}
                    draggableId={index.toString()}
                    index={index}
                  >
                    {(provided) => (
                      console.log(provided.draggableProps),
                      (
                        <ContCard
                          key={index}
                          imgsrc={image.src}
                          index={index}
                          provided={provided}
                        >
                          {image.src ? (
                            <>
                              <ImgBox
                                imgsrc={image.src}
                                imgname={image.name}
                                onClickDeleteHandler={onClickDeleteHandler}
                                index={index}
                              />
                            </>
                          ) : (
                            <>
                              <AddBtn
                                onClick={() => onClickInputFileHandler(index)}
                              >
                                <img src={addIcon} alt="등록하기 아이콘" />
                                등록하기
                              </AddBtn>
                              <InputFile
                                type="file"
                                accept="image/*"
                                id={`input_${index}`}
                                onChange={(e) => onChangeImgHandler(index, e)}
                              />
                            </>
                          )}
                        </ContCard>
                      )
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ContListContainer>
            )}
          </Droppable>
        </DragDropContext>
      </>
    </Wrapper>
  );
}
export default App;
