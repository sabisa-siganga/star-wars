import React from "react";
import { Link } from "react-router-dom";
import Picture from "../../components/Picture";
import {
  BackButton,
  CharacterContainer,
  DotStyle,
  UlStyle,
} from "./CharacterDetails.style";
import BackIcon from "../../assets/img/back-arrow.svg";

const CharacterDetails = () => {
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
                url="https://starwars-visualguide.com/assets/img/characters/81.jpg"
              />
            </span>
            Luke Skywalker
          </h1>
          <div className="row">
            <div className="col col-right">
              <UlStyle>
                <li>
                  <span>Birth year:</span> 19BBY
                </li>
                <li>
                  <span>Height:</span> 19BBY
                </li>
                <li>
                  <span>Mass:</span> 19BBY
                </li>
                <li>
                  <span>Gender:</span> 19BBY
                </li>
              </UlStyle>
            </div>
            <div className="col">
              <div>Hover over the dot to see its name color</div>
              <UlStyle>
                <li>
                  <span>Hair-color:</span>{" "}
                  <DotStyle>
                    <span style={{ backgroundColor: "blue" }} title="Blue" />
                  </DotStyle>
                </li>
                <li>
                  <span>Skin-color:</span>{" "}
                  <DotStyle>
                    <span style={{ backgroundColor: "red" }} />
                  </DotStyle>
                </li>
                <li>
                  <span>Eye color:</span>{" "}
                  <DotStyle>
                    <span style={{ backgroundColor: "yellow" }} />
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
                url="https://starwars-visualguide.com/assets/img/characters/81.jpg"
              />
            </div>
            <div className="col">
              <h3>Tatooine</h3>
              <h6>182 miles from earth</h6>
            </div>
          </div>
        </div>
      </CharacterContainer>
    </>
  );
};

export default CharacterDetails;
