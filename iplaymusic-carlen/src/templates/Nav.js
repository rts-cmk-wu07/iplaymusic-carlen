import { useLocation } from "react-router-dom";
import BackBtn from "../comp/BackBtn";
import Button from "../comp/sub-comp/Button";
const Nav = ({ top }) => {
  const location = useLocation();
  return (
    <div>
      {top ? (
        <div className="flex justify-between">
          <BackBtn />
          {location.pathname !== "/" ? <h1>{location.pathname}</h1> : null}
          <div>Search</div>
        </div>
      ) : (
        <div className="flex justify-around items-center h-12 shadow-inner">
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      )}
    </div>
  );
};

export default Nav;
