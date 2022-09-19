import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
const BackBtn = () => {
  return (
    <Link to="/">
      <IonIcon name="arrow-back" size="large" />
    </Link>
  );
};

export default BackBtn;
