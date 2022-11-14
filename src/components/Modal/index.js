import React from 'react';
import PropTypes from 'prop-types';
import { ModalBackground, ModalWindow, ModalClose } from '../styled';

const Modal = (props) => {
  const onClose = e => {
    props.onClose && props.onClose(e);
  };

  if (!props.show) {
    return null;
  }

  return (
    <>
      <ModalBackground />
      <ModalWindow>
        <div className="modal-content">{props.children}</div>
        <ModalClose onClick={onClose} />
      </ModalWindow>
    </>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.oneOf([null]).isRequired
  ])
};

export default Modal;