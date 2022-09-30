import { vars } from "./vars";
import { useState } from "react";
import ColorContext from "./context/colorContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./templates/Layout";

import Catagory from "./pages/Catagory";
import HandleColorChange from "./context/handleColorChange";
import AllAlbums from "./pages/AllAlbums";
import AllArtists from "./pages/AllArtists";
import EventFeed from "./pages/EventFeed";
import Home from "./pages/Home";
import Playlists from "./pages/Playlists";

import Featured from "./templates/Featured";
import tokenContext from "./context/tokenContext";
import Login from "./templates/Login";

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
	const [token, setToken] = useState("");

	return (
		<tokenContext.Provider value={{ token, setToken }}>
			<HandleColorChange.Provider value={handleThemeChange}>
				<ColorContext.Provider value={colors}>
					<BrowserRouter>
						<Routes>
							<Route
								path="/"
								element={!token ? <Login /> : <Layout />}>
								<Route
									index
									element={<Home />}
								/>
								<Route
									path="/eventfeed"
									element={<EventFeed />}
								/>
								<Route
									path="/catagory"
									element={<Catagory />}>
									{" "}
								</Route>
								<Route
									path="/featured"
									element={<Featured />}
								/>
								<Route
									path="/allalbums"
									element={<AllAlbums />}
								/>
								<Route
									path="/allartists"
									element={<AllArtists />}
								/>
								<Route
									path="/playlists"
									element={<Playlists />}
								/>
							</Route>
						</Routes>
					</BrowserRouter>
				</ColorContext.Provider>
			</HandleColorChange.Provider>
		</tokenContext.Provider>
	);
}

export default App;
