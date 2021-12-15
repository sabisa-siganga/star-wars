import React, { useContext } from "react";
import { StyledHeader } from "./Header.style";
import Logo from "../../assets/img/logo.png";
import SearchBar from "../SearchBar";
import { GlobalState } from "../../GlobalState/GlobalState";

const Header = () => {
  const { pageTitle } = useContext(GlobalState).state;

  return (
    <StyledHeader>
      <img src={Logo} alt="" />
      <div>
        <div>{pageTitle}</div>
        <SearchBar />
      </div>
    </StyledHeader>
  );
};

export default Header;
