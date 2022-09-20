import type { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";

interface Props {
  customLabel?: string;
}

export const Label: NextPage<Props> = (props) => {
  const { customLabel } = props;
  return (
    <div className={styles.labelElement}>
      <div className={styles.label}>{customLabel ? `${customLabel}:` : ""}</div>
    </div>
  );
};
