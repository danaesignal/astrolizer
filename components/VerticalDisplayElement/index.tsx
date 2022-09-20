import type { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";

interface Props {
  data: {
    label: string;
    content: string;
  };
  customLabel?: string;
}

export const VerticalDisplayElement: NextPage<Props> = (props) => {
  const { label, content } = props.data;
  const { customLabel } = props;

  return (
    <div className={styles.verticalDisplayElement}>
      <div className={styles.verticalLabel}>
        {customLabel ? customLabel : label}
      </div>
      <div className={styles.verticalContent}>{content}</div>
    </div>
  );
};
