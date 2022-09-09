import { vars } from "./vars";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

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
      background-color: ${colors.primary};
    `,
  };
  return (
    <div className="App">
      <div css={styles.bg}>hejsa</div>
      <button onClick={handleThemeChange}>hejsa</button>
    </div>
  );
}

export default App;
