type CharacterList = {
  isLoading: boolean;
  list: {
    id: number;
    image: string;
    name: string;
    birthYear: string;
    gender: string;
  }[];
  pagination: {
    prev: number;
    next: number;
    totalPages: number;
  };
};

const characterList: CharacterList = {
  isLoading: true,
  list: [],
  pagination: {
    prev: 0,
    next: 0,
    totalPages: 1,
  },
};

export default characterList;
