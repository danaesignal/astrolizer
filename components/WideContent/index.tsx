import type { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";

interface Props {
  data: {
    label: string;
    content: string;
  };
}

export const WideContent: NextPage<Props> = (props) => {
  const { content } = props.data;
  return (
    <div className={styles.wideContentElement}>
      <div className={styles.wideContent}>{content}</div>
    </div>
  );
};
