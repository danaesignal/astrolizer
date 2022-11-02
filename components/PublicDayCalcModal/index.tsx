import type { NextPage } from "next";
import { dataKeys } from "../../pages/daycalc";
import { InputElement } from "../InputElement";

interface Props {
  formData: {
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
