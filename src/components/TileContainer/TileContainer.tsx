import React from "react";
import Tile from "../Tile";
import { TileContainerStyle } from "./TileContainer.style";

// /character/1
const DUMY_DATA = [
  {
    id: 1,
    image: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
    name: "Luke Skywalker",
    birthYear: "199BBY",
    gender: "Female",
  },
  {
    id: 2,
    image: "https://starwars-visualguide.com/assets/img/characters/2.jpg",
    name: "C-3PO",
    birthYear: "112BBY",
    gender: "N/A",
  },
  {
    id: 3,
    image: "https://starwars-visualguide.com/assets/img/characters/3.jpg",
    name: "C-3PO",
    birthYear: "112BBY",
    gender: "N/A",
  },
];

const TileContainer = () => {
  return (
    <TileContainerStyle>
      {DUMY_DATA.map((character) => {
        return <Tile info={character} />;
      })}
    </TileContainerStyle>
  );
};

export default TileContainer;
