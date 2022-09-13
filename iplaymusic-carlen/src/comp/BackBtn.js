/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IonIcon from "@reacticons/ionicons";
const BackBtn = () => {
  let currentcolor = "#000000";
  const styles = {
    icon: css`
      color: black;
      fill: black;
      stroke: black;
    `,
  };
  function backHandler() {}
  return (
    <button css={styles.icon}>
      <IonIcon
        name="chevron-back-circle-sharp "
        size="large"
        css={styles.icon}
      />
    </button>
  );
};

export default BackBtn;
