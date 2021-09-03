// store.js
import React, { createContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import initialState from './initialState';

const store = createContext(initialState);
const { Provider } = store;

const ContextProvider = ({ children }) => {
  // all states are here and have their own reducer which allows multiple functions
  const [globalState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    return () => {};
  }, [globalState.loading]);

  return <Provider value={{ globalState, dispatch }}>{children}</Provider>;
};

export { store, ContextProvider };
