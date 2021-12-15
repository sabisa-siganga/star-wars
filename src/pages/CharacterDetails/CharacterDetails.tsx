import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Picture from "../../components/Picture";
import {
  BackButton,
  CharacterContainer,
  DotStyle,
  UlStyle,
} from "./CharacterDetails.style";
import BackIcon from "../../assets/img/back-arrow.svg";
import { useContext } from "react";
import { GlobalState } from "../../GlobalState/GlobalState";
import { useEffect } from "react";

const CharacterDetails = () => {
  const { state, dispatch } = useContext(GlobalState);
  const { character } = state;

  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "UPDATE_TITLE",
      payload: "DETAILS",
    });
  }, [dispatch]);

  useEffect(() => {
    if (!character.name) {
      navigate("/");
    }
  }, [character.name, navigate]);

  return (
    <>
      <BackButton>
        <Link to="/">
          <img src={BackIcon} alt="" /> Back Home
        </Link>
      </BackButton>
      <CharacterContainer>
        <div className="container-fluid">
          <h1>
            <span>
              <Picture
                style={{ height: "50px", width: "50px" }}
                url={character.characterImage}
              />
            </span>
            {character.name}
          </h1>
          <div className="row">
            <div className="col col-right">
              <UlStyle>
                <li>
                  <span>Birth year: </span> {` ${character.birthYear}`}
                </li>
                <li>
                  <span>Height: </span> {` ${character.height}`}
                </li>
                <li>
                  <span>Mass: </span> {` ${character.mass}`}
                </li>
                <li>
                  <span>Gender: </span> {` ${character.gender}`}
                </li>
              </UlStyle>
            </div>
            <div className="col">
              <div>Hover over the dot to see its name color</div>
              <UlStyle>
                <li>
                  <span>Hair-color:</span>{" "}
                  <DotStyle>
                    {character.hairColor.map((hair, index) => {
                      return (
                        <span
                          key={`hair_color_${index}`}
                          style={{ backgroundColor: hair }}
                          title={hair}
                        />
                      );
                    })}
                  </DotStyle>
                </li>
                <li>
                  <span>Skin-color:</span>{" "}
                  <DotStyle>
                    {character.skinColor.map((skin, index) => {
                      return (
                        <span
                          key={`skin_color_${index}`}
                          style={{ backgroundColor: skin }}
                          title={skin}
                        />
                      );
                    })}
                  </DotStyle>
                </li>
                <li>
                  <span>Eye color:</span>{" "}
                  <DotStyle>
                    {character.eyeColor.map((eye, index) => {
                      return (
                        <span
                          key={`eye_color_${index}`}
                          style={{ backgroundColor: eye }}
                          title={eye}
                        />
                      );
                    })}
                  </DotStyle>
                </li>
              </UlStyle>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <h1>Home World</h1>
          <div className="row">
            <div className="col-3">
              <Picture
                style={{ height: "150px", width: "150px" }}
                url={character.homeWorld.image}
              />
            </div>
            <div className="col">
              <h3>{character.homeWorld.name}</h3>
              <h6>
                Population is {character.homeWorld.population}, planet size is{" "}
                {character.homeWorld.size}
              </h6>
            </div>
          </div>
        </div>
      </CharacterContainer>
    </>
  );
};

export default CharacterDetails;
