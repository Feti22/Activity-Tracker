import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import { popularShowsData } from './services/showAPI';
import Header from './components/Header';
import MainPage from './components/MainPage';
import WatchList from './components/WatchList';
import Details from './components/Details';
import SearchPage from './components/SearchPage';

function App() {
  const [allShowsData, setAllShowsData] = useState([]);
  const [watchListData, setWatchListData] = useState(JSON.parse(localStorage.getItem('watchList')) || []);
 
  useEffect(() => {
    const getAllData = async() => {
      const data = await popularShowsData();
      setAllShowsData(data);
    }
    getAllData();
  }, []);

  const filterWatchList = (prevState, movie) => {
    const myWatchList = prevState.find(item => item.id === movie.id);
    if (myWatchList) return prevState.filter(item => item.id !== movie.id);
    return [...prevState, movie];
  }

  const handleWatchList = (movie) => {
    setWatchListData(prevState => {
      let newWatchList = filterWatchList(prevState, movie);
      localStorage.setItem('watchList', JSON.stringify(newWatchList));
      return newWatchList;
    });
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<MainPage showsData={allShowsData} handleWatchList={handleWatchList} watchListData={watchListData} />} />
        <Route exact path='/my-watch-list' element={<WatchList handleWatchList={handleWatchList} watchListData={watchListData} />} />
        <Route exact path='/details/:id' element={<Details handleWatchList={handleWatchList} watchListData={watchListData} />} />
        <Route exact path='/search' element={<SearchPage handleWatchList={handleWatchList} watchListData={watchListData} />} />
      </Routes>
    </Router>
  );
}

export default App;
