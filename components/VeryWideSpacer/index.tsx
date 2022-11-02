import type { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";

export const VeryWideSpacer: NextPage = () => {
  return (
    <div className={styles.veryWideContentElement}>
      <div className={styles.veryWideContent}></div>
    </div>
  );
};
