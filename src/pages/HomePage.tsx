import { FunctionComponent } from "react";
import Navigation2 from "../components/Navigation2";
import Navigation1 from "../components/Navigation1";
import SidePanel from "../components/SidePanel";
import styles from "./HomePage.module.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.navigationParent}>
        <Navigation2 />
        <Navigation1 />
      </header>
      <SidePanel />
    </div>
  );
};

export default HomePage;
