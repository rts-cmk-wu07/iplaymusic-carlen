import { vars } from "./vars";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Button from "./comp/sub-comp/Button";
import ColorContext from "./context/colorContext";
import Playbutton from "./comp/sub-comp/Playbutton";

function App() {
  const { light, dark } = vars;
  const [theme, setTheme] = useState(light);
  const handleThemeChange = () => {
    if (theme === light) {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };
  const colors = theme;
  const styles = {
    bg: css`
      font-size: 72px;
      background: -webkit-linear-gradient(
        left,
        ${colors.textgrad1},
        ${colors.textgrad2}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
      background-color: ${colors.primary};
    `,
  };
  return (
    <ColorContext.Provider value={colors}>
      <div className="App">
        <div css={styles.bg}>hejsa</div>
        <button onClick={handleThemeChange}>hejsa</button>
        <Playbutton />
        <Playbutton />
        <Button onClick={handleThemeChange} />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
