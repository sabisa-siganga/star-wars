import React, { createContext, useReducer } from "react";
import { GlobalStateProps, initialState } from "./initialState";
import reducer from "./reducers/reducer";

// Create context
export const GlobalState = createContext<{
  state: GlobalStateProps;
  dispatch: React.Dispatch<{
    type: string;
    payload?: any;
  }>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

// Provider component
export const GlobalProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalState.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
