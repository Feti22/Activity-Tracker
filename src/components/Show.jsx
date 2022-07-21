import { Link } from 'react-router-dom';

const Show = ({ movie, handleWatchList, watchListData }) => {
  return (
    <div className="movie">
      <Link to={`details/${movie.id}`}>
        <img 
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/image-not-available.jpg"} 
          alt={`${movie.original_name} poster`}
        />
        <div className="overlay">
          <div className="title">{movie.original_name}</div>
          <div className="rating">{movie.vote_average !== 0 ? `${movie.vote_average}/10` : "No Rating Available"}</div>
          <div className="plot">
            {movie.overview}
          </div>
        </div>
      </Link>
      <div 
        onClick={() => handleWatchList(movie)} 
        data-toggled={watchListData.some(item => item.id === movie.id)} 
        className="listToggle">
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
      </div>
    </div>      
  )
}

export default Show
