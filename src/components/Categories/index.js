import React from 'react';
import { useSelector } from 'react-redux';
import { genre } from '../../store/selectors';
import Category from '../Category';
import { CategoriesWrapper } from '../styled.js';

const categories = [
  {
    title: 'ALL',
    id: '1'
  },
  {
    title: 'DOCUMENTARY',
    id: '2'
  },
  {
    title: 'COMEDY',
    id: '3'
  },
  {
    title: 'HORROR',
    id: '4'
  },
  {
    title: 'CRIME',
    id: '5'
  }
];

const CategoriesSection = () => {
  const activeGenre = useSelector(genre);

  return (
    <CategoriesWrapper>
      {categories.map((category) =>
        <Category
          styleName={activeGenre.title.toUpperCase() == category.title ? 'category active' : 'category'}
          title={category.title}
          key={category.id}
        />
      )}
    </CategoriesWrapper>
  );
};

export default CategoriesSection;
