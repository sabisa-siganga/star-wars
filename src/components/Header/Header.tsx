import React from "react";
import { StyledHeader } from "./Header.style";
import Logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="" />
      <div>
        <div>Characters</div>
      </div>
    </StyledHeader>
  );
};

export default Header;
