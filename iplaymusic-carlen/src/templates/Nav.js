/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useLocation } from "react-router-dom";
import BackBtn from "../comp/BackBtn";
import Button from "../comp/sub-comp/Button";
import { useContext } from "react";
import HandleColorChange from "../context/handleColorChange";
import ColorContext from "../context/colorContext";
const Nav = ({ top }) => {
  const location = useLocation();
  const ThemeHandler = useContext(HandleColorChange);
  const colors = useContext(ColorContext);
  const styles = {
    bg: css`
      background: ${colors.bg};
    `,
    bottomBg: css`
      background: ${colors.addcolor};
    `,
    textColor: css`
      color: ${colors.text};
    `,
  };
  return (
    <div>
      {top ? (
        <div css={styles.bg} className="flex justify-between">
          <BackBtn />
          {location.pathname !== "/" ? (
            <h1 css={styles.textColor}>{location.pathname}</h1>
          ) : null}
          <div>Search</div>
        </div>
      ) : (
        <div
          css={styles.bottomBg}
          className="flex justify-around items-center h-12 shadow-inner"
        >
          <Button icon={"pulse"} />
          <Button icon={"mic-sharp"} />
          <Button size="large" main={true} />
          <Button onClick={ThemeHandler} icon={"contrast-outline"} />
          <Button icon={"settings-sharp"} />
        </div>
      )}
    </div>
  );
};

export default Nav;
