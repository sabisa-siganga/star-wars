import React, { useEffect } from "react";
import Pagination from "../../components/Pagination";
import { BGImage, MainStyle } from "./Home.style";
import TileContainer from "../../components/TileContainer";

import BG from "../../assets/img/star-ship2.jpg";

const Home = () => {
  useEffect(() => {
    // TODO: Make request to API to get character list
  }, []);

  return (
    <div>
      <MainStyle>
        <BGImage>
          <img src={BG} alt="" />
        </BGImage>
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
