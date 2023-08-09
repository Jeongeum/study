import { useState } from 'react';
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
import { useRef } from 'react';

// 기존의 dnd 방식
// 이것도 제대로 동작하고 있긴 한데 내가 원했던 방식과는 다르다.
// 내가 원했던 방식은 index 1과 3을 맞교환 하는 방식이었다.
// ex) 마멜, 루피, 춘식, 쿠로미 일때
// 루피를 쿠로미 자리로 옮기고 싶다면 -> 마멜, 쿠로미, 춘식, 루피 로 이동하길 바랬다.
// 하지만 현재의 dnd 방식은 루피를 쿠로미 자리로 옮기면 루피 자리를 춘식이가 한칸 앞으로 가서 채우는 방식이다.
// 드래그 중인 (곧 다른 자리로 옮겨갈 자리) 자리가 삭제되니까 그 바로 뒷 index들이 한칸씩 앞으로 당겨지는 것이다.

function 기존방식() {
  const [imgList, setImgList] = useState(
    new Array(4).fill({
      src: null,
      name: '',
    })
  );

  console.log(imgList);
  const dragItem = useRef();
  const dragOverItem = useRef();

  const onClickInputFileHandler = (index) => {
    const inputEl = document.getElementById(`input_${index}`);
    inputEl.click();
  };

  const onChangeImgHandler = (index, e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    const newList = [...imgList];

    reader.onloadend = () => {
      newList[index] = { src: reader.result, name: file.name };
      setImgList(newList);
    };
  };

  const onClickDeleteHandler = (index) => {
    const newDeleteList = [...imgList];

    newDeleteList[index] = { src: null, name: '' };

    setImgList(() => newDeleteList);
  };

  // 드래그 이벤트
  // 드래그 시작될 때
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log('드래그 시작: ', e.target.alt);
  };

  // 드래그 중인 대상이 위로 포개졌을 때
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.alt, '에 포개짐');
  };

  // 드래그를 끝냈을 때
  const drop = (e) => {
    const newImgList = [...imgList];

    const dragItemValue = newImgList[dragItem.current];

    newImgList.splice(dragItem.current, 1);

    newImgList.splice(dragOverItem.current, 0, dragItemValue);

    dragItem.current = null;
    dragOverItem.current = null;
    setImgList(newImgList);

    console.log(newImgList);
  };

  return (
    <>
      <Wrapper>
        <ContHeader>
          <h2>
            상단에 고정할 <br />
            콘텐츠를 선택해주세요.
          </h2>
          <p>설정 시, 내 채널 콘텐츠 상단에 4개까지 보여줍니다.</p>
        </ContHeader>

        <ContListContainer>
          {imgList.map((image, index) => (
            <ContCard
              key={index}
              imgsrc={image.src}
              dragStart={dragStart}
              dragEnter={dragEnter}
              drop={drop}
              index={index}
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
                  <AddBtn onClick={() => onClickInputFileHandler(index)}>
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
          ))}
        </ContListContainer>
      </Wrapper>
    </>
  );
}
export default 기존방식;
