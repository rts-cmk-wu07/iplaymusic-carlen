import { vars } from "./vars";
import { useState } from "react";
import ColorContext from "./context/colorContext";
import CatagoryDropdown from "./comp/Catagorydropdown";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./templates/Layout";
import Playbutton from "./comp/sub-comp/Playbutton";
import Catagory from "./pages/Catagory";
import HandleColorChange from "./context/handleColorChange";
import EventFeed from "./pages/EventFeed";

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
  return (
    <HandleColorChange.Provider value={handleThemeChange}>
      <ColorContext.Provider value={colors}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/eventfeed" element={<EventFeed />} />
              <Route path="/catagory" element={<Catagory />}> </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ColorContext.Provider>
    </HandleColorChange.Provider>
  );
}

export default App;
