import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../../GlobalState/GlobalState";
import { Character } from "../../interface/character";
import { Button } from "../Button/Button.style";
import Picture from "../Picture";
import {
  CharacterDetails,
  CharacterInfo,
  MoreInfo,
  TileMainStyle,
} from "./Tile.style";

type Props = {
  info: Character;
};

const Tile = (props: Props) => {
  const { info } = props;
  const { dispatch } = useContext(GlobalState);

  const navigate = useNavigate();

  const onClick = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    event.preventDefault();

    dispatch({
      type: "UPDATE_CHARACTER",
      payload: info,
    });

    navigate(`/character/${info.id}`);
  };

  return (
    <TileMainStyle
      aria-label="Character tile"
      href={`/character/${info.id}`}
      onClick={onClick}
    >
      <Picture url={info.characterImage} />
      <CharacterDetails>
        <CharacterInfo>
          <h2>{info.name}</h2>
          <div>
            <span>Born:</span> {info.birthYear}
          </div>
          <div>
            <span>Gender:</span> {info.gender}
          </div>
        </CharacterInfo>
        <MoreInfo>
          <Button onClick={onClick}>More info</Button>
        </MoreInfo>
      </CharacterDetails>
    </TileMainStyle>
  );
};

export default Tile;
