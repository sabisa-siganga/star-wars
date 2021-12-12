import React from "react";
import { Button } from "../Button/Button.style";
import Picture from "../Picture";
import {
  CharacterDetails,
  CharacterInfo,
  MoreInfo,
  TileMainStyle,
} from "./Tile.style";

const Tile = () => {
  return (
    <TileMainStyle aria-label="Character tile" href="#list">
      <Picture />
      <CharacterDetails>
        <CharacterInfo>
          <h2>Luke Skywalker</h2>
          <div>
            <span>Born:</span> 199BBY
          </div>
          <div>
            <span>Gender:</span> aMale
          </div>
        </CharacterInfo>
        <MoreInfo>
          <Button as="a" href="#a">
            More info
          </Button>
        </MoreInfo>
      </CharacterDetails>
    </TileMainStyle>
  );
};

export default Tile;
