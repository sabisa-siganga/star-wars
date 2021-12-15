import characterList from "./States/characterList";
import character from "./States/characterDetail";

export const initialState = {
  characterList,
  character,
  pageTitle: "",
};

export type GlobalStateProps = typeof initialState;
