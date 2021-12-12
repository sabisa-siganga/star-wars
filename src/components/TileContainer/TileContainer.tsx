import React from "react";
import Tile from "../Tile";
import { TileContainerStyle } from "./TileContainer.style";

const TileContainer = () => {
  return (
    <TileContainerStyle>
      <Tile />
      <Tile />
    </TileContainerStyle>
  );
};

export default TileContainer;
