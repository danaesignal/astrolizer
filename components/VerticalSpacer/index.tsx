import type { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";

interface Props {
  customLabel?: string;
}

export const VerticalSpacer: NextPage<Props> = (props) => {
  const { customLabel } = props;

  return (
    <div className={styles.verticalDisplayElement}>
      <div className={styles.verticalLabel}>
        {customLabel ? customLabel : ""}
      </div>
      <div className={styles.verticalContent}>{"\t"}</div>
    </div>
  );
};
