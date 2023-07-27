import { styled } from 'styled-components';

export const PostListWrapper = styled.section`
  width: 930px;
  margin: 0 auto;

  ul {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 300px);
    justify-content: center;
    align-items: center;
    justify-items: center;
  }

  li {
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    border-radius: 20px;
    box-shadow: 4px 4px 8px rgb(210 210 210);
  }

  img {
    width: 250px;
  }
`;
