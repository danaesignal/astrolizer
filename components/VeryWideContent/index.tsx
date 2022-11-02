import type { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";

interface Props {
  data: {
    label: string;
    content: string;
  };
}

export const VeryWideContent: NextPage<Props> = (props) => {
  const { content } = props.data;
  return (
    <div className={styles.veryWideContentElement}>
      <div className={styles.veryWideContent}>{content}</div>
    </div>
  );
};
