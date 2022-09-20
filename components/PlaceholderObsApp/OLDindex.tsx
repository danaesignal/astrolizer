import type { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";
import { ObsAppRequest } from "../../shared/tools/buildReport/obsApp";
import { useState } from "react";
import { Spacer } from "../Spacer";
import { VerticalSpacer } from "../VerticalSpacer";
import { Label } from "../Label";
import { WideSpacer } from "../WideSpacer";
import { InputElement } from "../InputElement";
import { HalfSpacer } from "../HalfSpacer";
import { dataKeys } from "../../pages/obsapp";

interface Props {
  formData: {
    dateOfBirth: string;
    timeOfBirth: string;
    calcDate: string;
    calcTime: string;
    motherYearOfBirth: string;
    gender: string;
  };
  handleChange(key: string, formValue: string): any;
}

export const PlaceholderObsApp: NextPage<Props> = (props) => {
  const { formData, handleChange } = props;

  return (
    <div>
      <div className={styles.section}>
        <div className={styles.row}>
          {/* DOB, TOB, CalcDate, CalcTime */}
          <InputElement
            customLabel="DoB"
            placeholder="YYYYMMDD"
            handleChange={handleChange}
            formKey={dataKeys.dateOfBirth}
            data={{
              label: "",
              content: formData.dateOfBirth,
            }}
          />
          <InputElement
            customLabel="ToB"
            placeholder="HHMM"
            handleChange={handleChange}
            formKey={dataKeys.timeOfBirth}
            data={{
              label: "",
              content: formData.timeOfBirth,
            }}
          />
          <InputElement
            customLabel="CalcDate"
            placeholder="YYYYMMDD"
            handleChange={handleChange}
            formKey={dataKeys.calcDate}
            data={{ label: "", content: formData.calcDate }}
          />
          <InputElement
            customLabel="CalcTime"
            placeholder="HHMM"
            handleChange={handleChange}
            formKey={dataKeys.calcTime}
            data={{ label: "", content: formData.calcTime }}
          />
        </div>
        <div className={styles.row}>
          {/* MoYOB */}
          <InputElement
            customLabel="MoYOB"
            placeholder="YYYY"
            handleChange={handleChange}
            formKey={dataKeys.motherYearOfBirth}
            data={{
              label: "",
              content: formData.motherYearOfBirth,
            }}
          />
        </div>
        <div className={styles.row}>
          {/* Gender, Year Gender, Year  */}
          <InputElement
            customLabel="Gender"
            handleChange={handleChange}
            placeholder="[male/female]"
            formKey={dataKeys.gender}
            data={{ label: "", content: formData.gender }}
          />
          <Spacer />
          <Spacer />
        </div>
        <div className={styles.row}>
          {/* Age, Spacer, Month */}
          <Spacer />
          <Spacer />
          <Spacer />
        </div>
        <div className={styles.row}>
          {/* KyeMe, KyePar, Day */}
          <Spacer />
          <Spacer />
          <Spacer />
        </div>
        <div className={styles.row}>
          {/* BapMe, BapPar, Hour */}
          <Spacer />
          <Spacer />
          <Spacer />
        </div>
      </div>
      <div className={styles.section} style={{ marginTop: "2rem" }}>
        <div className={styles.row}>
          <Label customLabel="Sign" />
          <VerticalSpacer />
          <VerticalSpacer />
          <VerticalSpacer />
          <VerticalSpacer />
          <VerticalSpacer />
          <VerticalSpacer />
          <VerticalSpacer />
          <VerticalSpacer />
          <VerticalSpacer />
          <VerticalSpacer customLabel="Dargud" />
          <VerticalSpacer />
        </div>
        <div className={styles.row}>
          <Label customLabel="Srog" />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <WideSpacer />
          <HalfSpacer />
        </div>
        <div className={styles.row}>
          <Label customLabel="Lue" />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <WideSpacer />
          <HalfSpacer />
        </div>
        <div className={styles.row}>
          <Label customLabel="Wang" />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <WideSpacer />
          <HalfSpacer />
        </div>
        <div className={styles.row}>
          <Label customLabel="Lung" />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <HalfSpacer />
          <WideSpacer />
          <HalfSpacer />
        </div>
      </div>
    </div>
  );
};
