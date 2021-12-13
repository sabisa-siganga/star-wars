import React from "react";
import { StyledHeader } from "./Header.style";
import Logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="" />
      <div>
        {/* TODO: Change this title using Global state */}
        <div>Characters</div>
      </div>
      {/* TODO: Add search functionality */}
    </StyledHeader>
  );
};

export default Header;
