import React from "react";

const image_api = "https://image.tmdb.org/t/p/w500";

const Movie = ({ title, poster_path }) => (
  
  <div className="movie">
    <img src={image_api + poster_path} alt={title}/>
    <div className="movie-header">
        <h3>{title}</h3>
        {/* <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span> */}
    </div>
  </div>
  
);

export default Movie;

