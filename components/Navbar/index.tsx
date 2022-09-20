import type { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";

export const Navbar: NextPage = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navigation}>
        <div className={styles.active}>ObsApp</div>
        <div className={styles.inactive}>Natal</div>
        <div className={styles.inactive}>DayCalc</div>
      </div>
    </div>
  );
};
