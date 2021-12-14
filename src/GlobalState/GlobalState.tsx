// import { GlobalState } from './GlobalState';
import React, { createContext, useReducer } from "react";
import { initialState } from "./initialState";
import reducer from "./reducers/reducer";

// Create context
export const GlobalState = createContext(initialState);

// Provider component
export const GlobalProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  // Actions
  function fetchCharacterList() {
    dispatch({
      type: "FETCH_CHARACTERS",
    });
  }

  return (
    <GlobalState.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
