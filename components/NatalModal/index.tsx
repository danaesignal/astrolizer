import type { NextPage } from "next";
import { dataKeys } from "../../pages/natal";
import { InputElement } from "../InputElement";
import { GenderSelector } from "../GenderSelector";

interface Props {
  formData: {
    dateOfBirth: string;
    timeOfBirth: string;
    motherYearOfBirth: string;
  };
  handleChange(key: string, formValue: string): any;
}

export const NatalModal: NextPage<Props> = (props) => {
  const { formData, handleChange } = props;

  return (
    <div>
      <InputElement
        data={{ label: "DoB", content: formData[dataKeys.dateOfBirth] }}
        handleChange={handleChange}
        placeholder="YYYYMMDD"
        formKey={dataKeys.dateOfBirth}
      />
      <InputElement
        data={{ label: "ToB", content: formData[dataKeys.timeOfBirth] }}
        handleChange={handleChange}
        placeholder="HHMM"
        formKey={dataKeys.timeOfBirth}
      />
      <InputElement
        data={{ label: "MoYOB", content: formData[dataKeys.motherYearOfBirth] }}
        handleChange={handleChange}
        placeholder="YYYY"
        formKey={dataKeys.motherYearOfBirth}
      />
    </div>
  );
};
