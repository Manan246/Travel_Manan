import { FunctionComponent } from "react";
import styles from "./Navigation1.module.css";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: FunctionComponent<Navigation1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.navigation, className].join(" ")}>
      <div className={styles.endTask}>
        <a className={styles.travelsathi}>travelSathi</a>
        <div className={styles.endTaskInner}>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src="/rectangle-1.svg" />
            <a className={styles.signlogIn}>SIGN/LOG IN</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation1;
