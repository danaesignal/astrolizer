import type { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";

interface Props {
  customLabel?: string;
}

export const Spacer: NextPage<Props> = (props) => {
  const { customLabel } = props;
  return (
    <div className={styles.displayElement}>
      <div className={styles.label}>{customLabel ? `${customLabel}:` : ""}</div>
      <div className={styles.content}></div>
    </div>
  );
};
