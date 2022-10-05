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

export const GenderSelector: NextPage<Props> = (props) => {
  const { label, content } = props.data;
  const { customLabel, placeholder, handleChange, formKey } = props;
  return (
    <div className={styles.displayElement}>
      <div className={styles.label}>{customLabel ? customLabel : label}:</div>
      <select
        className={styles.inputDropdown}
        onChange={(event) => {
          handleChange(formKey, event.target.value);
        }}
        defaultValue={content}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};
