import type { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";

interface Props {
  data: {
    label: string;
    content: string;
  };
  customLabel?: string;
}

export const DisplayElement: NextPage<Props> = (props) => {
  const { label, content } = props.data;
  const { customLabel } = props;
  return (
    <div className={styles.displayElement}>
      <div className={styles.label}>{customLabel ? customLabel : label}:</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};
