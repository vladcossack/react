import React, { createContext, useReducer } from 'react';

const initialState = {};
const actions = {
  SET_OPEN: 'SET_OPEN',
  SET_CLOSE: 'SET_CLOSE'
};


function reducer(state, action) {
  switch (action.type) {
  case actions.SET_OPEN:

    return {
      ...state,
      isOpened: action.value
    };
  default:
    return state;
  }
}
const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    setOpen: (value) => {
      dispatch({
        type: actions.SET_OPEN, value
      });
    },

    isOpened: state.isOpened
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider }; 