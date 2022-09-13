import { vars } from "./vars"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState } from "react"
import ColorContext from "./context/colorContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./templates/Layout"
import Playbutton from "./comp/sub-comp/Playbutton"
import AllAlbums from "./pages/AllAlbums"

function App() {
  const { light, dark } = vars
  const [theme, setTheme] = useState(light)
  const handleThemeChange = () => {
    if (theme === light) {
      setTheme(dark)
    } else {
      setTheme(light)
    }
  }
  const colors = theme
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
  }
  return (
    <ColorContext.Provider value={colors}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/slideralbums" element={<AllAlbums />}></Route>
        </Routes>
      </BrowserRouter>
    </ColorContext.Provider>
  )
}

export default App
