import React from 'react';
import { MovieModal, MovieModalBtn } from '../styled.js';
import Modal from '../Modal';
import EditMovieContent from '../EditMovieContent';
import DeleteMovieContent from '../DeleteMovieContent';
import useModalStatus from '../../hooks/modalHelper';

const MovieModalContent = () => {
  const [modalContent, setModalContent] = useModalStatus();
  return (
    <>
      <MovieModal>
        <Modal
          onClose={() => {setModalContent(null);}}
          show={(modalContent && modalContent.key === 'edit')}>
          <EditMovieContent />
        </Modal>
        <MovieModalBtn onClick={() => {setModalContent({key: 'edit', movie: 1});}}>Edit</MovieModalBtn>
        <Modal
          onClose={() => {setModalContent(null);}}
          show={(modalContent && modalContent.key === 'delete')}>
          <DeleteMovieContent />
        </Modal>
        <MovieModalBtn onClick={() => {setModalContent({key: 'delete', movie: 1});}}>Delete</MovieModalBtn>
      </MovieModal>
    </>
  );
};

export default MovieModalContent;