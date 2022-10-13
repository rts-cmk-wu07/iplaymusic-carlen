/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { NavLink, useLocation } from "react-router-dom";
import BackBtn from "../comp/BackBtn";
import Button from "../comp/sub-comp/Button";
import { useContext } from "react";
import HandleColorChange from "../context/handleColorChange";
import ColorContext from "../context/colorContext";
import IonIcon from "@reacticons/ionicons";
const Nav = ({ top }) => {
  const location = useLocation();
  const ThemeHandler = useContext(HandleColorChange);
  const colors = useContext(ColorContext);
  const styles = {
    bg: css`
      background: transparent;
    `,
    bottomBg: css`
      background: ${colors.addcolor};
    `,
    textColor: css`
      color: ${colors.text};
    `,
    icon: css`
      background: linear-gradient(
        to right,
        ${colors.textgrad1},
        ${colors.textgrad2}
      ) !important;
    `,
  };
  return (
    <div>
      {top ? (
        <div css={styles.bg} className="flex items-center justify-between">
          {location.pathname === "/ " ? <BackBtn /> : <div></div>}
          <div>Search</div>
        </div>
      ) : (
        <div
          css={styles.bottomBg}
          className="flex justify-around items-center h-12 shadow-inner"
        >
          <NavLink
            css={styles.icon}
            className="flex justify-center items-center w-9 h-9 rounded-full"
            to="/allalbums"
          >
            <IonIcon name="pulse" />
          </NavLink>
          <NavLink
            css={styles.icon}
            className="flex justify-center items-center w-9 h-9 rounded-full"
            to="/"
          >
            <IonIcon name="mic-sharp" />
          </NavLink>
          <NavLink
            css={styles.icon}
            className="flex justify-center items-center w-9 h-9 rounded-full"
            to="/featured"
          >
            <IonIcon name="caret-up-outline" />
          </NavLink>
          <Button
            onClick={ThemeHandler}
            cord="true"
            icon={"contrast-outline"}
          />
          <NavLink
            css={styles.icon}
            className="flex justify-center items-center w-9 h-9 rounded-full"
            to="/catagory"
          >
            <IonIcon name="settings-sharp" />
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
