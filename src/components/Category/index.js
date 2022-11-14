import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Category } from '../styled.js';
import PropTypes from 'prop-types';
import { setActiveGenre } from '../../store/actions/actionCreators';


const CategoryItem = ({ title, styleName }) => {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(setActiveGenre(title.toLowerCase()));
  }, [title]);

  return (
    <Category
      className={styleName}
      onClick={handleClick}
    >
      <h3>{title}</h3>
    </Category>
  );
};


CategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  styleName: PropTypes.string.isRequired,
};

export default CategoryItem;