type Character = {
  name: string;
  characterImage: string;
  birthYear: string;
  height: string;
  mass: string;
  gender: string;
  hairColor: string[];
  eyeColor: string[];
  skinColor: string[];

  homeWorld: {
    image: string;
    name: string;
  };
};

const character: Character = {
  name: "",
  characterImage: "",
  birthYear: "",
  height: "",
  mass: "",
  gender: "",
  hairColor: [],
  eyeColor: [],
  skinColor: [],

  homeWorld: {
    image: "",
    name: "",
  },
};

export default character;
