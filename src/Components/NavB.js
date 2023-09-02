// NavB.js
import React, { useState } from 'react';
import { Navbar, Container, Form, Button } from 'react-bootstrap';
import ReactStars from 'react-stars';
import AddMovie from './AddMovie';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  background-color: #333; // Change the background color
`;

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin-left: 10px;
`;

const NavB = ({ setRatingFilter, setTitleFilter }) => {
  const [searchInput, setSearchInput] = useState('');
  const [ratingInput, setRatingInput] = useState(0);

  const handleFilter = (e) => {
    e.preventDefault();
    const titleFilter = searchInput.toLowerCase().trim();
    const ratingFilter = parseFloat(ratingInput);

    setTitleFilter(titleFilter);
    setRatingFilter(ratingFilter);
  };

  const handleClear = () => {
    setSearchInput('');
    setRatingInput(0);
    setTitleFilter('');
    setRatingFilter(0);
  };

  return (
    <StyledNavbar expand="lg" variant="dark">
      <Container fluid>
        <StyledForm onSubmit={handleFilter}>
          <ReactStars
            count={5}
            value={ratingInput}
            onChange={(newRating) => setRatingInput(newRating)}
            size={24}
            half={false}
            color2={'#ffd700'}
          />
          <Form.Control
            type="search"
            placeholder="Search by title or description"
            className="me-2"
            aria-label="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <StyledButton type="submit" variant="success">
            Filter
          </StyledButton>
          <StyledButton variant="danger" onClick={handleClear}>
            Clear
          </StyledButton>
        </StyledForm>
      </Container>
    </StyledNavbar>
  );
};

export default NavB;
