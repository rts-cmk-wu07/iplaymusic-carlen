/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import ColorContext from "../../context/colorContext";
const Heading = ({ text, color }) => {
  const colors = useContext(ColorContext);
  const whiteText = css`
    color: white;
  `;
  const textColor = css`
    background: -webkit-linear-gradient(
      left,
      ${colors.textgrad1},
      ${colors.textgrad2}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;
  return (
    <h1
      css={`
        ${color === "white" ? whiteText : textColor}
      `}
      className=" text-3xl font-bold"
    >
      {text}
    </h1>
  );
};

export default Heading;
