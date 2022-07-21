import Show from './Show';

const ShowList = ({ provider, data, handleWatchList, watchListData }) => {
  
  return (
    <>
      <div className='titleList'>
        <div className='title'>
          <h1>{provider}</h1>
          <div className='titles-wrapper'>
            {data === undefined ? '' 
              : data.results?.map(movie => {
                return (
                  <Show 
                    key={movie.id} 
                    movie={movie} 
                    handleWatchList={handleWatchList} 
                    watchListData={watchListData} 
                  />
                );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowList;