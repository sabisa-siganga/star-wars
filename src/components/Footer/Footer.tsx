import React from "react";
import { FooterStyle } from "./Footer.style";

const Footer = () => {
  return (
    <FooterStyle>
      &copy; 2021. Made with{` `}
      <span>&hearts;</span>
      {` `}by Sabisa
    </FooterStyle>
  );
};

export default Footer;
