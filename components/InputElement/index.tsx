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
  handleChange(key: string, formValue: string): any;
}

export const InputElement: NextPage<Props> = (props) => {
  const { label, content } = props.data;
  const { customLabel, placeholder, handleChange, formKey } = props;

  return (
    <div className={styles.displayElement}>
      <div className={styles.label}>{customLabel ? customLabel : label}:</div>
      <input
        className={styles.input}
        placeholder={placeholder ? placeholder : content}
        onChange={(event) => {
          let newVal = event.target.value;
          let charLimit = placeholder ? placeholder.length : 8;
          if (/^[0-9]+$|^$/.test(newVal) && newVal.length <= charLimit) {
            handleChange(formKey, event.target.value);
          }
        }}
        value={content}
      />
    </div>
  );
};
