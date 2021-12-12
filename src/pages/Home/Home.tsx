import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import { MainStyle } from "./Home.style";
import TileContainer from "../../components/TileContainer";

const Home = () => {
  return (
    <div>
      <Header />
      <MainStyle>
        <div>
          <h3>Character List:</h3>
          <TileContainer />

          <Pagination />
        </div>
      </MainStyle>
      <Footer />
    </div>
  );
};

export default Home;
