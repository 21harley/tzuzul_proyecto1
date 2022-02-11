import React from 'react';
import Movie from './Movie';


export default function Movies({movies}) {
  return (
    <section className="movie-container">
        {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
      </section>
  )
}
