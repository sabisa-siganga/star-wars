import { GlobalStateProps } from "../initialState";

const reducer = (
  state: GlobalStateProps,
  action: {
    type: string;
    payload?: any;
  }
) => {
  switch (action.type) {
    case "ADD_CHARACTERS":
      return {
        ...state,
        characterList: {
          list: action.payload.list,
          pagination: action.payload.pagination,
        },
      };
    case "UPDATE_CHARACTER":
      return {
        ...state,
        character: action.payload,
      };
    case "UPDATE_TITLE":
      return {
        ...state,
        pageTitle: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
