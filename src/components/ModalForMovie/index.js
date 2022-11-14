import React from 'react';
import PropTypes from 'prop-types';
import { MovieModalClose } from '../styled';

const ModalForMovie = (props) => {
  const onClose = e => {
    props.onClose && props.onClose(e);
  };

  if (!props.show) {
    return null;
  }

  return (
    <>
      <div className="modal-content">{props.children}</div>
      <MovieModalClose onClick={onClose} />
    </>
  );
};

ModalForMovie.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.oneOf([null]).isRequired
  ])
};

export default ModalForMovie;
