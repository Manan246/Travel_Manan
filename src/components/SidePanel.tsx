import { FunctionComponent } from "react";
import styles from "./SidePanel.module.css";

export type SidePanelType = {
  className?: string;
};

const SidePanel: FunctionComponent<SidePanelType> = ({ className = "" }) => {
  return (
    <section className={[styles.sidePanel, className].join(" ")}>
      <div className={styles.cardPanel}>
        <div className={styles.profileCard}>
          <div className={styles.card1}>
            <h1 className={styles.goSolo}>
              <p className={styles.go}>{`Go `}</p>
              <p className={styles.go}>Solo</p>
            </h1>
          </div>
        </div>
        <div className={styles.profileCard}>
          <div className={styles.card1}>
            <h1 className={styles.goSolo}>Go in Group</h1>
          </div>
        </div>
        <div className={styles.card3}>
          <h1 className={styles.goSolo}>
            <p className={styles.go}>Search</p>
            <p className={styles.go}>Profile</p>
          </h1>
        </div>
        <div className={styles.card3}>
          <h1 className={styles.goSolo}>Your Groups</h1>
        </div>
      </div>
    </section>
  );
};

export default SidePanel;
