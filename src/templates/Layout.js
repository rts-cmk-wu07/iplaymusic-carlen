/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import ColorContext from "../context/colorContext";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Player from "../comp/Player";
import DarkModeAnimation from "../comp/animation/DarkModeToggleCircle";
import IsDarkContext from "../context/isDarkContext";
const Layout = () => {
  const colors = useContext(ColorContext);
  const isDark = useContext(IsDarkContext);
  const styles = {
    bg: css`
      background: transparent;
    `,
  };
  return (
    <div className="h-screen flex flex-col justify-between">
      <Nav top={true} />
      <DarkModeAnimation isDark={isDark} />
      <div css={styles.bg} className="h-screen overflow-auto">
        <Outlet />
      </div>
      <Player />
      <Nav />
    </div>
  );
};

export default Layout;
