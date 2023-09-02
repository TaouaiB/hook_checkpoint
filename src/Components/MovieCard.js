import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 48%;
  margin-bottom: 20px;
  display: inline-block;
  background: ${(props) => `url(${props.posterUrl}) center/cover`}; // Dynamic background image
  border-radius: 8px;
  min-height: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const CardStyle = styled.div`
  width: 50%;
  padding: 10px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-sizing: border-box;
`;

const CardTitleStyle = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
`;

const CardInfoStyle = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const MovieCard = ({ movie }) => {
  return (
    <CardContainer posterUrl={movie.posterURL}>
      <CardStyle>
        <Card.Img variant="top" src={movie.posterURL} alt={movie.title} />
        <Card.Body>
          <CardTitleStyle>{movie.title}</CardTitleStyle>
          <CardInfoStyle>{movie.description}</CardInfoStyle>
          <CardInfoStyle>Rating: {movie.rating}</CardInfoStyle>
        </Card.Body>
      </CardStyle>
    </CardContainer>
  );
};

export default MovieCard;
