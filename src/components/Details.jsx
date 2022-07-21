import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../services/showAPI';

const Details = ({ handleWatchList, watchListData }) => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState([]);

  useEffect(() => {
    const getShowDetails = async() => {
      const data = await getShowById(id);
      setShowDetails(data);
    }
    getShowDetails();
  }, [id]);

  const updateWatchList = () => {
    const myWatchList = watchListData.some(item => item.id === showDetails.id);
    if (myWatchList) return {className: 'remove-to-watchlist', innerHTML: ' - Remove from Watch List'};
    return {className: 'add-to-watchlist', innerHTML: ' + Add to Watch List'};
  }

  return (
    <div className="show-details">
      <img
        src={showDetails.backdrop_path ? `https://image.tmdb.org/t/p/original/${showDetails.backdrop_path}` : '/empty.png'}
        alt={showDetails.original_name}
      />
      <div className="show-details-inner">
        <h1>{showDetails.name} </h1>
        <div className="description">
          {showDetails.overview}
        </div>
        <button 
          onClick={() => handleWatchList(showDetails)} className={updateWatchList().className}>
          {updateWatchList().innerHTML}
        </button>
      </div>
    </div>        
  )
}

export default Details;