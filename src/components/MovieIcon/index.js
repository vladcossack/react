import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styled from 'styled-components';
import MovieModalContent from '../MovieModalContent';
import useModalStatus from '../../hooks/modalHelper';
import ModalForMovie from '../ModalForMovie';

const MovieIcon = styled(MoreVertIcon)`
  && {
    background: #232323;
    border-radius: 50%;
    color: #ffffff;
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

const MovieIconModal = () => {
  const [modalContent, setModalContent] = useModalStatus();
  return (
    <>
      <div className='movie-icon'>
        <MovieIcon onClick={() => { setModalContent({ key: 'movie-modal', movie: 1 }); }} />
      </div>
      <ModalForMovie
        onClose={() => {setModalContent(null);}}
        show={(modalContent && modalContent.key === 'movie-modal')}>
        <MovieModalContent />
      </ModalForMovie>
    </>
  );
};

export default MovieIconModal;