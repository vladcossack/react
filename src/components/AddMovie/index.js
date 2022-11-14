import React from 'react';
import { AddMovie } from '../styled.js';

const AddMovieButton = ({showModal}) => (
  <AddMovie onClick={showModal}>+ ADD MOVIE</AddMovie>
);

export default AddMovieButton;