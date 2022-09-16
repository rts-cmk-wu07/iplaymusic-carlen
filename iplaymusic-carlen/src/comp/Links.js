/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import ColorContext from "../context/colorContext";

import { NavLink } from "react-router-dom";

const Links = ({ link, linkText }) => {
  // const colors = useContext(ColorContext)
  // const styles = {
  //   link: css`

  //   `
  // }
  return (
    <NavLink
      className="flex p-3 rounded-lg mb-3 bg-catColor-100 text-white"
      to={link}
    >
      {linkText}
    </NavLink>
  );
};

export default Links;
