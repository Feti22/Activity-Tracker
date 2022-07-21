import ShowList from './ShowList';

const MainPage = ({ showsData, handleWatchList, watchListData }) => {

  return (
    <>
      <ShowList 
        provider='NetFlix' 
        data={showsData[0]} 
        handleWatchList={handleWatchList} 
        watchListData={watchListData} 
      />
      <ShowList 
        provider='Crave' 
        data={showsData[1]} 
        handleWatchList={handleWatchList} 
        watchListData={watchListData} 
      />
      <ShowList 
        provider='Disney' 
        data={showsData[2]} 
        handleWatchList={handleWatchList} 
        watchListData={watchListData} 
      />
      <ShowList 
        provider='Apple Plus' 
        data={showsData[3]} 
        handleWatchList={handleWatchList} 
        watchListData={watchListData} 
      />
    </>
  )
}

export default MainPage;