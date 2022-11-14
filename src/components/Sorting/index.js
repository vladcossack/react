import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSortingValue } from '../../store/actions/actionCreators';
import { SortingWrapper, SortingTitle, SortingValue } from '../styled.js';

const Sorting = () => {  
  const dispatch = useDispatch();

  const handleChange = useCallback((event) => {
    dispatch(setSortingValue(event.target.value));
  }, [dispatch]);

  return (
    <SortingWrapper>
      <SortingTitle>SORT BY</SortingTitle>
      <SortingValue onChange={handleChange}>
        <option value="release_date">RELEASE DATE</option>
        <option value="vote_average">RATING</option>
      </SortingValue>
    </SortingWrapper>
  );
};

export default Sorting;