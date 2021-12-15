export interface Character {
  id: number;
  name: string;
  characterImage: string;
  height: string;
  birthYear: string;
  mass: string;
  gender: string;
  hairColor: string[];
  eyeColor: string[];
  skinColor: string[];
  homeWorld: {
    image: string;
    name: string;
    population: string;
    size: string;
  };
}
