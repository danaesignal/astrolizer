import type { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";

interface Props {
  data: {
    label: string;
    content: string;
  };
  placeholder?: string;
  customLabel?: string;
  formKey: string;
  hideInput?: boolean;
  handleChange(key: string, formValue: string): any;
}

export const TextInputElement: NextPage<Props> = (props) => {
  const { label, content } = props.data;
  const { customLabel, placeholder, handleChange, formKey, hideInput } = props;

  return (
    <div className={styles.displayElementPW}>
      <div className={styles.labelPW}>{customLabel ? customLabel : label}:</div>
      <input
        className={styles.input}
        placeholder={placeholder ? placeholder : content}
        onChange={(event) => {
          handleChange(formKey, event.target.value);
        }}
        type={hideInput ? "password" : "text"}
        value={content}
      />
    </div>
  );
};
