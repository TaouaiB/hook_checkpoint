import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import movieData from './Components/Movie_Raw_Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './Components/AddMovie';
import NavB from './Components/NavB';
import styled from 'styled-components';
import './App.css';



const AppContainer = styled.div`
  background-image: url('https://www.eparenting.co.uk/movies/movieimages/emotions_movies_header.jpg');
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const AppTitle = styled.h1`
  color: #fff;
  font-size: 36px;
  margin: 20px 0;
`;

const App = () => {
  const [movies, setMovies] = useState(movieData);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <AppContainer>
      <AppTitle>Cinephile's Paradise</AppTitle>
      <NavB setRatingFilter={setRatingFilter} setTitleFilter={setTitleFilter} />
      <AddMovie Add={addMovie} />
      <MovieList movies={movies} titleFilter={titleFilter} ratingFilter={ratingFilter} />
    </AppContainer>
  );
};

export default App;
