import React, { useEffect } from 'react';
import { ModalProvider } from '../../state/context';
import { useDispatch } from 'react-redux';
import { setActiveMovie } from '../../store/actions/actionCreators';

import Header from '../Header';
import MoviesList from '../MoviesList';
import Footer from '../Footer';
import ErrorFallback from '../ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import MovieDetails from '../MovieDetails';

function HomePage({ match }) {
  // Use Bomb to check ErrorBoundary
  // function Bomb() {
  //   throw new Error('💥 CABOOM 💥')
  // }
  const filmId = Number(match?.params?.id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filmId) {
      dispatch(setActiveMovie(filmId));
    }
  }, [filmId, dispatch]);

  return (
    <ModalProvider>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
      >
        {filmId ? <MovieDetails /> : <Header />}
        {/* <Bomb />   */}
        <MoviesList />
      </ErrorBoundary>
      <Footer />
    </ModalProvider>
  );
}

export default HomePage;