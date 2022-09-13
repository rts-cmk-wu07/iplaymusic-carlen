/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IonIcon from "@reacticons/ionicons";
import { useNavigate } from "react-router-dom";
const BackBtn = () => {
  const styles = {
    icon: css`
      color: black;
      fill: black;
      stroke: black;
    `,
  };
  return (
    <button css={styles.icon} onClick={useNavigate(-1)}>
      <IonIcon
        name="chevron-back-circle-sharp "
        size="large"
        css={styles.icon}
      />
    </button>
  );
};

export default BackBtn;
