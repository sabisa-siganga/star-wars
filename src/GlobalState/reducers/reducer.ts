import { GlobalStateProps } from "../initialState";

const reducer = (
  state: GlobalStateProps,
  action: {
    type: string;
    payload?: any;
  }
) => {
  switch (action.type) {
    case "FETCH_CHARACTERS":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
