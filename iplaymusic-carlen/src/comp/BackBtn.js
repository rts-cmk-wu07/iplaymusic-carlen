/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IonIcon from "@reacticons/ionicons";
import { useNavigate, redirect } from "react-router-dom";
const BackBtn = () => {
  const styles = {
    icon: css`
      color: black;
      fill: black;
      stroke: black;
    `,
  };

  return (
    <button css={styles.icon}>
      <IonIcon name="arrow-back" size="large" />
    </button>
  );
};

export default BackBtn;
