/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IonIcon from "@reacticons/ionicons";
import { useContext } from "react";
import ColorContext from "../../context/colorContext";

const Button = ({ onClick, icon, size }) => {
  const colors = useContext(ColorContext);

  const styles = {
    btn: css`
      background: ${colors.primary};
    `,
    icon: css`
      background: linear-gradient(
        to right,
        ${colors.textgrad1},
        ${colors.textgrad2}
      ) !important;
    `,
  };
  return (
    <button onClick={onClick} css={styles.btn} className="w-9 h-9 rounded-full">
      <IonIcon css={styles.icon} name={icon} size={size} />
    </button>
  );
};

export default Button;
