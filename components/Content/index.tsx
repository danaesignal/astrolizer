import type { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";

interface Props {
  data: {
    label: string;
    content: string;
  };
}

export const Content: NextPage<Props> = (props) => {
  const { content } = props.data;
  return (
    <div className={styles.contentElement}>
      <div className={styles.content}>{content}</div>
    </div>
  );
};
