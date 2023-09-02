import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, titleFilter, ratingFilter }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {movies
        .filter((movie) => {
          const lowerCaseTitle = movie.title.toLowerCase();
          const lowerCaseDescription = movie.description.toLowerCase();
          const lowerCaseFilter = titleFilter.toLowerCase().trim();

          return (
            (lowerCaseTitle.includes(lowerCaseFilter) || lowerCaseDescription.includes(lowerCaseFilter)) &&
            movie.rating >= ratingFilter
          );
        })
        .map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;