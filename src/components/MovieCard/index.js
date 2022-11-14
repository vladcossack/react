import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { MovieCard, Image, Year, DescriptionWrapper, Genre } from '../styled.js';
import MovieIcon from '../MovieIcon';
import { setActiveMovie } from '../../store/actions/actionCreators';

function MovieCardWrapper(props) {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = useCallback(() => {
    dispatch(setActiveMovie(props.id));
    history.push(`/film/${props.id}`);
  }, [props]);

  const handleHover = useCallback(() => {
    setHovered(true);
  }, [hovered]);

  const handleUnHover = useCallback(() => {
    setHovered(false);
  }, [hovered]);

  return (
    <MovieCard
      className={hovered ? 'movie-card-hovered' : ''}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnHover}
      onClick={() => {
        handleClick();
      }}
    >
      <Image src={props.photo} />
      <MovieIcon />
      <DescriptionWrapper>
        <h3>{props.title}</h3>
        <Genre>{props.genresList}</Genre>
        <Year>{props.year && props.year.split('-')[0]}</Year>
      </DescriptionWrapper>
    </MovieCard>
    // {/* <MovieIcon /> */} outside Card, better to movie list
  );
}

MovieCardWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

// don't rerender component if props not changed ?
export default React.memo(MovieCardWrapper);