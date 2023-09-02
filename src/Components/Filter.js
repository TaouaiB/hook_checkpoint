import React from 'react';

const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        min="1"
        max="10"
        onChange={(e) => onRatingChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;