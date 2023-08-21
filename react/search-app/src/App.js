import React, { useEffect, useState } from 'react';
import { Home } from './components/Home/Home';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import useDebounceValue from './hooks/useDebounceValue';

function App() {
  const [query, setQuery] = useState('');
  // const inputRef = useRef(''); // inputRef.current
  const [movieData, setMovieData] = useState(null);
  const [ref, inView] = useInView();

  const debounceKeyword = useDebounceValue(query, 400);

  // isFetchingNextPage : 현재 페이지를 가져오는 중인지 확인하는 상태
  const { fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
    useInfiniteQuery(
      ['page', debounceKeyword],
      async ({ pageParam = 1 }) => {
        const res = await axios.get(
          `http://www.omdbapi.com/?i=tt3896198&apikey=e88314be&s=${debounceKeyword}&page=${pageParam}`
        );
        console.log(res.config.url);

        if (pageParam === 1) {
          setMovieData(res.data.Search);
        } else {
          setMovieData((prevData) => [...prevData, ...res.data.Search]);
        }
        return res.data.Search;
      },
      {
        enabled: false,
        staleTime: 1 * 60 * 1000,
        notifyOnChangeProps: [debounceKeyword],
        getNextPageParam: (lastPage, pages) => {
          return (lastPage?.length || 0) < 10 ? false : pages.length + 1;
        },
      }
    );

  const onChangeHandler = (e) => {
    setQuery(() => e.target.value);
  };

  // 검색버튼 클릭 시 영화 데이터 수동으로 가져오기
  const onClickSearchHandler = (e) => {
    e.preventDefault();
    if (debounceKeyword) refetch();
  };

  // enter 키 눌렸을 시 검색 버튼 클릭과 동일한 동작 수행
  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter' && debounceKeyword) {
      console.log('🔎검색버튼 엔터!');
      e.preventDefault();
      refetch();
    }
  };

  // inView && hasNextPage가 true이고 현재 페이지를 가져오는 중이 아닐 때에만 다음 페이지 가져오기 요청
  useEffect(() => {
    if (!inView || !hasNextPage || isFetchingNextPage || !debounceKeyword) {
      return;
    }

    console.log('💛 무한스크롤');
    fetchNextPage();
  }, [inView]);

  // debounceKeyword가 변경될 때마다 movieData 초기화
  useEffect(() => {
    if (!debounceKeyword && movieData !== null) {
      setMovieData(null);
    }
  }, [debounceKeyword]);

  return (
    <>
      <Home
        onChangeHandler={onChangeHandler}
        onClickSearchHandler={onClickSearchHandler}
        onKeyDownHandler={onKeyDownHandler}
        movieData={movieData}
        refState={ref}
        debounceKeyword={debounceKeyword}
      />
    </>
  );
}
export default App;
