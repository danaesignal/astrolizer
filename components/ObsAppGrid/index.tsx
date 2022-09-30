import { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";
import { dataKeys } from "../../pages/obsapp";
import { InputElement } from "../InputElement";
import { GenderSelector } from "../GenderSelector";
import { DisplayElement } from "../DisplayElement";
import { Spacer } from "../Spacer";
import { VerticalDisplayElement } from "../VerticalDisplayElement";
import { Label } from "../Label";
import { VerticalSpacer } from "../VerticalSpacer";
import { Content } from "../Content";
import { WideContent } from "../WideContent";

interface Props {
  formData: {
    dateOfBirth: string;
    timeOfBirth: string;
    calcDate: string;
    calcTime: string;
    motherYearOfBirth: string;
    gender: string;
  };

  data: {
    label: string;
    content: string;
  }[][];

  handleChange(key: string, formValue: string): any;
}

export const ObsAppGrid: NextPage<Props> = (props) => {
  const { formData, data, handleChange } = props;
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.row}>
          {/* DOB, TOB, CalcDate, CalcTime */}
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
            data={{
              label: "CalcDate",
              content: formData[dataKeys.calcDate],
            }}
            handleChange={handleChange}
            placeholder="YYYYMMDD"
            formKey={dataKeys.calcDate}
          />
          <InputElement
            data={{
              label: "CalcTime",
              content: formData[dataKeys.calcTime],
            }}
            handleChange={handleChange}
            placeholder="HHMM"
            formKey={dataKeys.calcTime}
          />
        </div>
        <div className={styles.row}>
          {/* MoYOB */}
          <InputElement
            data={{
              label: "MoYOB",
              content: formData[dataKeys.motherYearOfBirth],
            }}
            handleChange={handleChange}
            placeholder="YYYY"
            formKey={dataKeys.motherYearOfBirth}
          />
        </div>
        <div className={styles.row}>
          {/* Gender, Year Gender, Year  */}
          <GenderSelector
            data={{ label: "Gender", content: formData[dataKeys.gender] }}
            handleChange={handleChange}
            placeholder="[male/female]"
            formKey={dataKeys.gender}
          />
          <DisplayElement data={data[0][6]} />
          <DisplayElement data={data[0][7]} />
        </div>
        <div className={styles.row}>
          {/* Age, Spacer, Month */}
          <DisplayElement data={data[0][8]} />
          <Spacer />
          <DisplayElement data={data[0][9]} />
        </div>
        <div className={styles.row}>
          {/* KyeMe, KyePar, Day */}
          <DisplayElement data={data[0][10]} />
          <DisplayElement data={data[0][11]} />
          <DisplayElement data={data[0][12]} />
        </div>
        <div className={styles.row}>
          {/* BapMe, BapPar, Hour */}
          <DisplayElement data={data[0][13]} />
          <DisplayElement data={data[0][14]} />
          <DisplayElement data={data[0][15]} />
        </div>
      </div>
      <div className={styles.section} style={{ marginTop: "2rem" }}>
        <div className={styles.row}>
          <Label customLabel="Sign" />
          <VerticalDisplayElement data={data[1][0]} customLabel="Client" />
          <VerticalDisplayElement data={data[1][1]} customLabel="Year" />
          <VerticalSpacer />
          <VerticalDisplayElement data={data[1][2]} customLabel="LogMen" />
          <VerticalSpacer />
          <VerticalDisplayElement data={data[1][3]} customLabel="BapMe" />
          <VerticalSpacer />
          <VerticalDisplayElement data={data[1][4]} customLabel="Parkha" />
          <VerticalSpacer />
          <VerticalSpacer customLabel="Dargud" />
          <VerticalDisplayElement data={data[1][5]} customLabel="Dutsod" />
        </div>
        <div className={styles.row}>
          <Label customLabel="Srog" />
          <Content data={data[1][6]} />
          <Content data={data[1][7]} />
          <Content data={data[1][8]} />
          <Content data={data[1][9]} />
          <Content data={data[1][10]} />
          <Content data={data[1][11]} />
          <Content data={data[1][12]} />
          <Content data={data[1][13]} />
          <WideContent data={data[1][14]} />
          <Content data={data[1][15]} />
        </div>
        <div className={styles.row}>
          <Label customLabel="Lue" />
          <Content data={data[1][16]} />
          <Content data={data[1][17]} />
          <Content data={data[1][18]} />
          <Content data={data[1][19]} />
          <Content data={data[1][20]} />
          <Content data={data[1][21]} />
          <Content data={data[1][22]} />
          <Content data={data[1][23]} />
          <WideContent data={data[1][24]} />
          <Content data={data[1][25]} />
        </div>
        <div className={styles.row}>
          <Label customLabel="Wang" />
          <Content data={data[1][26]} />
          <Content data={data[1][27]} />
          <Content data={data[1][28]} />
          <Content data={data[1][29]} />
          <Content data={data[1][30]} />
          <Content data={data[1][31]} />
          <Content data={data[1][32]} />
          <Content data={data[1][33]} />
          <WideContent data={data[1][34]} />
          <Content data={data[1][35]} />
        </div>
        <div className={styles.row}>
          <Label customLabel="Lung" />
          <Content data={data[1][36]} />
          <Content data={data[1][37]} />
          <Content data={data[1][38]} />
          <Content data={data[1][39]} />
          <Content data={data[1][40]} />
          <Content data={data[1][41]} />
          <Content data={data[1][42]} />
          <Content data={data[1][43]} />
          <WideContent data={data[1][44]} />
          <Content data={data[1][45]} />
        </div>
      </div>
    </div>
  );
};
