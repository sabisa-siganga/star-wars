import React from "react";
import { StyledHeader } from "./Header.style";
import Logo from "../../assets/img/logo.png";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="" />
      <div>
        {/* TODO: Change this title using Global state */}
        <div>Characters</div>
        {/* TODO: Add search functionality */}
        <SearchBar />
      </div>
    </StyledHeader>
  );
};

export default Header;
