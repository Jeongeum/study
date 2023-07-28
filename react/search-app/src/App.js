import { useEffect, useState } from 'react';
import { Home } from './components/Home/Home';
import GlobalStyle from './styles/Globalstyle';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [movieData, setMovieData] = useState([]);
  const [ref, inView] = useInView();

  const onChangeHandler = (e) => {
    setQuery(() => e.target.value);
  };

  const onClickSearchHandler = (e) => {
    e.preventDefault();

    axios
      .get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=e88314be&s=${query}&page=${page}`
      )
      .then((res) => {
        console.log(res);
        setMovieData(res.data.Search);
        setPage((page) => page + 1);
      })
      .catch((err) => console.log(err));
  };

  const movieFetch = () => {
    axios
      .get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=e88314be&s=${query}&page=${page}`
      )
      .then((res) => {
        console.log(res);
        setMovieData([...movieData, ...res.data.Search]);
        setPage((page) => page + 1);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (inView) {
      console.log(inView, '무한스크롤 요청');
      movieFetch();
    }
  }, [inView]);

  return (
    <>
      <GlobalStyle />
      <Home
        onChangeHandler={onChangeHandler}
        onClickSearchHandler={onClickSearchHandler}
        movieData={movieData}
        refState={ref}
      />
    </>
  );
}
export default App;
