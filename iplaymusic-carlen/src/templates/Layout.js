import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Nav top={true} />
      <Outlet />
      <Nav />
    </div>
  );
};

export default Layout;
