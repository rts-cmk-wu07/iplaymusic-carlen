import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TokenContext from "./context/TokenContext";
import ColorContext from "./context/colorContext";
import { vars } from "./vars";

import Layout from "./templates/Layout";

import Catagory from "./pages/Catagory";
import HandleColorChange from "./context/handleColorChange";
import AllAlbums from "./pages/AllAlbums";
import AllArtists from "./pages/AllArtists";
import EventFeed from "./pages/EventFeed";
import Home from "./pages/Home";
import Playlists from "./pages/Playlists";
import Featured from "./templates/Featured";
import Login from "./templates/Login";
import Callback from "./pages/Callback";
import NotFound from "./pages/NotFound";
import AlbumDetails from "./pages/AlbumDetails";
import PlaylistDetails from "./pages/PlaylistDetails";
import CurrentSongContext from "./context/currentSongContext";
import IsDarkContext from "./context/isDarkContext";

function App() {
	const [currentSong, setCurrentSong] = useState("");
	const { light, dark } = vars;
	const [isDark, setIsDark] = useState(false);
	const [theme, setTheme] = useState(light);

	const handleThemeChange = () => {
		if (theme === light) {
			setTheme(dark);
			setIsDark(true);
		} else {
			setTheme(light);
			setIsDark(false);
		}
	};
	const colors = theme;
	var tokenState = useState(null);

  return (
    <HandleColorChange.Provider value={handleThemeChange}>
      <ColorContext.Provider value={colors}>
        <IsDarkContext.Provider value={isDark}>
          <TokenContext.Provider value={tokenState}>
		        <CurrentSongContext.Provider value={[currentSong, setCurrentSong]}>
            <div>
              <BrowserRouter>
                <Routes>
                  {(function () {
                    if (tokenState[0]?.access_token) {
                      return (
                        <>
                          <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="/eventfeed" element={<EventFeed />} />
                            <Route path="/catagory" element={<Catagory />}>
                              {" "}
                            </Route>
                            <Route path="/featured" element={<Featured />} />
                            <Route path="/allalbums" element={<AllAlbums />} />
                            <Route path="/albumdetails/:id" element={<AlbumDetails/>}/>
                            <Route
                              path="/allartists"
                              element={<AllArtists />}
                            />
                            <Route path="/playlists" element={<Playlists />} />
                            <Route
														path="playlists/playlistdetails/:id"
														element={<PlaylistDetails />}
													/>
                          </Route>
                        </>
                      );
                    }
                  })()}
                  <Route path="/" element={<Login />} />
                  <Route path="/callback" element={<Callback />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </div>
			      </CurrentSongContext.Provider>
          </TokenContext.Provider>
        </IsDarkContext.Provider>
      </ColorContext.Provider>
    </HandleColorChange.Provider>
  );
}

export default App;
