import React from "react";
import { Button } from "../Button/Button.style";
import Picture from "../Picture";
import {
  CharacterDetails,
  CharacterInfo,
  MoreInfo,
  TileMainStyle,
} from "./Tile.style";

type Props = {
  info: {
    id: number;
    image: string;
    name: string;
    dateOfBirth: string;
    gender: string;
  };
};

const Tile = (props: Props) => {
  const { info } = props;

  return (
    <TileMainStyle aria-label="Character tile" to={`/character/${info.id}`}>
      <Picture url={info.image} />
      <CharacterDetails>
        <CharacterInfo>
          <h2>{info.name}</h2>
          <div>
            <span>Born:</span> {info.dateOfBirth}
          </div>
          <div>
            <span>Gender:</span> {info.gender}
          </div>
        </CharacterInfo>
        <MoreInfo>
          <Button as="a" href={`/character/${info.id}`}>
            More info
          </Button>
        </MoreInfo>
      </CharacterDetails>
    </TileMainStyle>
  );
};

export default Tile;
