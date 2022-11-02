import { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";
import { dataKeys } from "../../pages/natal";
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
    motherYearOfBirth: string;
  };

  data: {
    label: string;
    content: string;
  }[][];

  handleChange(key: string, formValue: string): any;
}

export const NatalGrid: NextPage<Props> = (props) => {
  const { formData, data, handleChange } = props;
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.row}>
          {/* DOB, TOB, CalcDate, CalcTime */}
          <InputElement
            data={{ label: "Date", content: formData[dataKeys.dateOfBirth] }}
            handleChange={handleChange}
            placeholder="YYYYMMDD"
            formKey={dataKeys.dateOfBirth}
          />
          <InputElement
            data={{ label: "Time", content: formData[dataKeys.timeOfBirth] }}
            handleChange={handleChange}
            placeholder="HHMM"
            formKey={dataKeys.timeOfBirth}
          />
          {/* MoYOB */}
          <InputElement
            data={{
              label: "Mo. Birth Year",
              content: formData[dataKeys.motherYearOfBirth],
            }}
            handleChange={handleChange}
            placeholder="YYYY"
            formKey={dataKeys.motherYearOfBirth}
          />
        </div>
        <div className={styles.row}>
          <Spacer />
          <Spacer />
          <DisplayElement data={data[0][3]} />
        </div>
        <div className={styles.row}>
          <Spacer />
          <Spacer />
          <DisplayElement data={data[0][4]} />
        </div>
        <div className={styles.row}>
          <DisplayElement data={data[0][5]} />
          <Spacer />
          <DisplayElement data={data[0][6]} />
        </div>
        <div className={styles.row}>
          <DisplayElement data={data[0][7]} />
          <Spacer />
          <DisplayElement data={data[0][8]} />
        </div>
      </div>
      <div className={styles.section} style={{ marginTop: "2rem" }}>
        <div className={styles.row}>
          <DisplayElement data={data[1][0]} />
          <DisplayElement customLabel="Element" data={data[1][1]} />
          <DisplayElement customLabel="Day-Type" data={data[1][2]} />
        </div>
        <div className={styles.row}>
          <DisplayElement data={data[1][3]} />
          <DisplayElement customLabel="Element" data={data[1][4]} />
          <DisplayElement customLabel="Combination" data={data[1][5]} />
        </div>
        <div className={styles.row}>
          <DisplayElement data={data[1][6]} />
          <WideContent data={data[1][7]} />
        </div>
        <div className={styles.row}>
          <DisplayElement data={data[1][8]} />
          <WideContent data={data[1][9]} />
        </div>
      </div>
      <div className={styles.section} style={{ marginTop: "2rem" }}>
        <div className={styles.row}>
          <Label customLabel="Year" />
          <VerticalDisplayElement customLabel="Sign" data={data[2][0]} />
          <VerticalDisplayElement customLabel="Gender" data={data[2][1]} />
          <VerticalDisplayElement customLabel="Life-Force" data={data[2][2]} />
          <VerticalDisplayElement customLabel="Body" data={data[2][3]} />
          <VerticalDisplayElement customLabel="Power" data={data[2][4]} />
          <VerticalDisplayElement customLabel="Luck" data={data[2][5]} />
        </div>
        <div className={styles.row}>
          <Label customLabel="Month" />
          <Content data={data[2][6]} />
          <Content data={data[2][7]} />
          <Content data={data[2][8]} />
          <Content data={data[2][9]} />
          <Content data={data[2][10]} />
          <Content data={data[2][11]} />
        </div>
        <div className={styles.row}>
          <Label customLabel="Day" />
          <Content data={data[2][12]} />
          <Content data={data[2][13]} />
          <Content data={data[2][14]} />
          <Content data={data[2][15]} />
          <Content data={data[2][16]} />
          <Content data={data[2][17]} />
        </div>
        <div className={styles.row}>
          <Label customLabel="Hour" />
          <Content data={data[2][18]} />
          <Content data={data[2][19]} />
          <Content data={data[2][20]} />
          <Content data={data[2][21]} />
          <Content data={data[2][22]} />
          <Content data={data[2][23]} />
        </div>
      </div>
      <div className={styles.section} style={{ marginTop: "2rem" }}>
        <div className={styles.row}>
          <DisplayElement data={data[3][0]} />
          <DisplayElement customLabel="Wood Count" data={data[3][4]} />
          <Content data={data[3][5]} />
        </div>
        <div className={styles.row}>
          <DisplayElement data={data[3][1]} />
          <DisplayElement customLabel="Fire Count" data={data[3][6]} />
          <Content data={data[3][7]} />
        </div>
        <div className={styles.row}>
          <Spacer />
          <DisplayElement customLabel="Earth Count" data={data[3][8]} />
          <Content data={data[3][9]} />
        </div>

        <div className={styles.row}>
          <DisplayElement data={data[3][2]} />
          <DisplayElement customLabel="Metal Count" data={data[3][10]} />
          <Content data={data[3][11]} />
        </div>
        <div className={styles.row}>
          <DisplayElement data={data[3][3]} />
          <DisplayElement customLabel="Water Count" data={data[3][12]} />
          <Content data={data[3][13]} />
        </div>
      </div>
      <div className={styles.section} style={{ marginTop: "2rem" }}>
        <div className={styles.row}>
          <DisplayElement data={data[4][0]} />
          <DisplayElement data={data[4][3]} />
          <DisplayElement data={data[4][9]} />
        </div>
        <div className={styles.row}>
          <DisplayElement data={data[4][1]} />
          <DisplayElement data={data[4][4]} />
          <DisplayElement data={data[4][10]} />
        </div>
        <div className={styles.row}>
          <DisplayElement data={data[4][2]} />
          <DisplayElement data={data[4][5]} />
          <DisplayElement data={data[4][11]} />
        </div>
        <div className={styles.row}>
          <Spacer />
          <DisplayElement data={data[4][6]} />
          <DisplayElement data={data[4][12]} />
        </div>
        <div className={styles.row}>
          <Spacer />
          <DisplayElement data={data[4][7]} />
          <DisplayElement data={data[4][13]} />
        </div>
        <div className={styles.row}>
          <Spacer />
          <DisplayElement data={data[4][8]} />
          <DisplayElement data={data[4][14]} />
        </div>
      </div>
    </div>
  );
};
