/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import ColorContext from "../../context/colorContext";

const Button = ({ onClick }) => {
  const colors = useContext(ColorContext);
  const styles = {
    btn: css`
      background: ${colors.primary};
    `,
  };
  return (
    <button
      onClick={onClick}
      css={styles.btn}
      className="w-5 h-5 rounded-full"
    ></button>
  );
};

export default Button;
