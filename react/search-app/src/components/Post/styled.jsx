import { styled } from 'styled-components';

export const PostListWrapper = styled.section`
  width: 930px;
  margin: 0 auto;

  ul {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 250px);
    justify-content: center;
    align-items: center;
    justify-items: center;
    padding: 20px;
    border-radius: 20px;
    width: 800px;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: inset 0px 0px 10px rgb(155 152 152);
  }

  li {
    position: relative;
    width: 100%;
    height: 380px;
    background-color: #ffffff;
    text-align: center;
    border-radius: 20px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }

    div {
      width: 100%;
      position: absolute;
      bottom: 0px;
      height: 80px;
      border-radius: 10px 10px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      font-weight: 600;

      color: #ffffff;
      background-color: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
    }
  }
`;
