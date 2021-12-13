import React from "react";
import { PictureStyle } from "./Picture.style";

type Props = {
  url: string;
  style?: React.CSSProperties;
};

const Picture = (props: Props) => {
  const { url, style } = props;
  return (
    <PictureStyle style={style}>
      <img src={url} alt="" />
    </PictureStyle>
  );
};
Picture.defaultProps = { style: undefined };

export default Picture;
