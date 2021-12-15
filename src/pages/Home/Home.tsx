import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import { BGImage, MainStyle } from "./Home.style";
import TileContainer from "../../components/TileContainer";

import BG from "../../assets/img/star-ship2.jpg";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalState } from "../../GlobalState/GlobalState";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { page } = useParams();

  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_TITLE",
      payload: "CHARACTERS",
    });
  }, [dispatch]);

  useEffect(() => {
    let currentPage = 1;

    if (page) {
      currentPage = parseInt(page);
    }

    setPageNumber(currentPage);
  }, [page]);

  return (
    <div>
      <MainStyle>
        <BGImage>
          <img src={BG} alt="" />
        </BGImage>
        <div>
          <h3>Character List:</h3>
          <TileContainer page={pageNumber} />

          <Pagination />
        </div>
      </MainStyle>
    </div>
  );
};

export default Home;
