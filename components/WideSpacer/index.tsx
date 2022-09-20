import type { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";

export const WideSpacer: NextPage = () => {
  return (
    <div className={styles.wideContentElement}>
      <div className={styles.wideContent}></div>
    </div>
  );
};
