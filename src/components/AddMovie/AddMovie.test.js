import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';

import AddMovie from '../AddMovie';

describe('AddMovie component', () => {
  it('should render AddMovie snapshot', () => {
    const { asFragment } = render(<AddMovie />);
    expect(asFragment(<AddMovie />)).toMatchSnapshot();
  });

  it('should call showModal with positive result', () => {
    const showModal = jest.fn();
    render(<AddMovie showModal={showModal} />);

    const agreeBtn = screen.getByText('+ ADD MOVIE');

    fireEvent.click(agreeBtn);

    expect(showModal).toHaveBeenCalled();
  });
}); 