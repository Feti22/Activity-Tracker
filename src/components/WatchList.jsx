import ShowList from './ShowList';

const WatchList = ({ handleWatchList, watchListData }) => {
  return (
    <>
      <ShowList 
        provider='My Watch List' 
        data={{results: watchListData}} 
        handleWatchList={handleWatchList} 
        watchListData={watchListData} 
      />
    </>
  )
}

export default WatchList;