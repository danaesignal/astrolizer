import type { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";

export const HalfSpacer: NextPage = () => {
  return (
    <div className={styles.contentElement}>
      <div className={styles.content}></div>
    </div>
  );
};
