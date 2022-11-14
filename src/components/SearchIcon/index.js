import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

const SearchIconBlock = styled(SearchIcon)`
  && {
    color: #f65261;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const SearchingIcon = () => {
  return (
    <SearchIconBlock />
  );
};

export default SearchingIcon;