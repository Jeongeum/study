import { useState } from 'react';
import { Home } from './components/Home/Home';
import GlobalStyle from './styles/Globalstyle';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [movieData, setMovieData] = useState();
  const onChangeHandler = (e) => {
    setQuery(() => e.target.value);
  };

  const onClickSearchHandler = (e) => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?i=tt3896198&apikey=e88314be&s=${query}`)
      .then((res) => {
        console.log(res);
        setMovieData(res.data.Search);
      });
  };
  return (
    <>
      <GlobalStyle />
      <Home
        onChangeHandler={onChangeHandler}
        onClickSearchHandler={onClickSearchHandler}
        movieData={movieData}
      />
    </>
  );
}
export default App;
