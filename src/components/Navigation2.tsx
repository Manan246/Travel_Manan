import { FunctionComponent } from "react";
import styles from "./Navigation2.module.css";

export type Navigation2Type = {
  className?: string;
};

const Navigation2: FunctionComponent<Navigation2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.navigation, className].join(" ")}>
      <a className={styles.home}>HOME</a>
      <div className={styles.places}>PLACES</div>
      <div className={styles.places}>HOTELS</div>
      <div className={styles.places}>ABOUT</div>
      <img
        className={styles.middleFrameIcon}
        loading="lazy"
        alt=""
        src="/middle-frame@2x.png"
      />
    </div>
  );
};

export default Navigation2;
