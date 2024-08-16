

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css'; 

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/moviedetails/${movie.imdbID}`);
  };

  return (
    <div onClick={handleCardClick} className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
    </div>
  );
};

export default MovieCard;
