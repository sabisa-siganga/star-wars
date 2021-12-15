import { Character } from "../../interface/character";

type CharacterList = {
  list: Character[];
  pagination: {
    prev: number;
    next: number;
    totalPages: number;
  };
};

const characterList: CharacterList = {
  list: [],
  pagination: {
    prev: 0,
    next: 0,
    totalPages: 1,
  },
};

export default characterList;
