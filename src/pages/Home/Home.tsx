import React from "react";
import Pagination from "../../components/Pagination";
import { MainStyle } from "./Home.style";
import TileContainer from "../../components/TileContainer";

const Home = () => {
  return (
    <div>
      <MainStyle>
        <div>
          <h3>Character List:</h3>
          <TileContainer />

          <Pagination />
        </div>
      </MainStyle>
    </div>
  );
};

export default Home;
