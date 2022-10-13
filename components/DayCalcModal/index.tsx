import type { NextPage } from "next";
import { dataKeys } from "../../pages/daycalc";
import { InputElement } from "../InputElement";
import { GenderSelector } from "../GenderSelector";

interface Props {
  formData: {
    dateOfBirth: string;
    timeOfBirth: string;
    motherYearOfBirth: string;
    calcDate: string;
    calcTime: string;
  };
  handleChange(key: string, formValue: string): any;
}

export const DayCalcModal: NextPage<Props> = (props) => {
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
      <InputElement
        data={{ label: "CalcDate", content: formData[dataKeys.calcDate] }}
        handleChange={handleChange}
        placeholder="YYYYMMDD"
        formKey={dataKeys.calcDate}
      />
      <InputElement
        data={{ label: "CalcTime", content: formData[dataKeys.calcTime] }}
        handleChange={handleChange}
        placeholder="HHMM"
        formKey={dataKeys.calcTime}
      />
    </div>
  );
};
