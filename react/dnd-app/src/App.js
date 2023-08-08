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

function App() {
  const [imgSrc, setImgSrc] = useState(new Array(4).fill(null));

  const onClickInputFileHandler = (index) => {
    const inputEl = document.getElementById(`input_${index}`);
    inputEl.click();
  };

  const onChangeImgHandler = (index, e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    const newImgSrc = [...imgSrc];

    reader.onloadend = () => {
      newImgSrc[index] = reader.result;
      setImgSrc(newImgSrc);
    };
  };

  const onClickDeleteHandler = (index) => {
    const copyImgSrc = [...imgSrc];
    copyImgSrc[index] = null;
    setImgSrc(copyImgSrc);
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
          {imgSrc.map((image, index) => (
            <ContCard key={index} imgvalue={image}>
              {image ? (
                <>
                  <ImgBox
                    image={image}
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
export default App;
