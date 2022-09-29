import React, { useEffect } from "react"
import { vars } from "./vars"
import { useState } from "react"
import ColorContext from "./context/colorContext"
import CatagoryDropdown from "./comp/Catagorydropdown"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./templates/Layout"
import Playbutton from "./comp/sub-comp/Playbutton"
import Catagory from "./pages/Catagory"
import HandleColorChange from "./context/handleColorChange"
import AllAlbums from "./pages/AllAlbums"
import AllArtists from "./pages/AllArtists"
import EventFeed from "./pages/EventFeed"
import Home from "./pages/Home"
import Playlists from "./pages/Playlists"
import AlbumDetails from "./pages/AlbumDetails"
import Featured from "./templates/Featured"

import { reducerCases } from "./utils/Constants"
import { useStateProvider } from "./utils/StateProvider"
import Login from "./comp/Login"
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
  const [{ token }, dispatch] = useStateProvider()
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1]

      dispatch({ type: reducerCases.SET_TOKEN, token })
    }
  }, [token, dispatch])
  const colors = theme
  return (
    <HandleColorChange.Provider value={handleThemeChange}>
      <ColorContext.Provider value={colors}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={token ? <Layout /> : <Login />}>
              <Route index element={<Home />} />
              <Route path="/eventfeed" element={<EventFeed />} />
              <Route path="/catagory" element={<Catagory />}>
                {" "}
              </Route>
              <Route path="/featured" element={<Featured />} />
              <Route path="/allalbums" element={<AllAlbums />} />
              <Route path="/allartists" element={<AllArtists />} />
              <Route path="/playlists" element={<Playlists />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ColorContext.Provider>
    </HandleColorChange.Provider>
  )
}

export default App
