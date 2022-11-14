import React from 'react';
import rerender from 'react-test-renderer';
import SearchResults from '../SearchResults';

describe('when SearchResults', () => {

  test('then snapshot created', () => {
    const count = 200;
    const component = rerender.create(<SearchResults count={count}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});