import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ShowList from './ShowList';
import { getShowData } from '../services/showAPI';

const SearchPage = ({ handleWatchList, watchListData }) => {
  const [searchData, setSearchData] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const getSearchData = async() => {
      const data = await getShowData(query);
      setSearchData(data);
    }
    getSearchData();
  }, [query]);

  return (
    <>
      <ShowList 
        provider='Results' 
        data={searchData} 
        handleWatchList={handleWatchList} 
        watchListData={watchListData} 
      />
    </>
  )
}

export default SearchPage;