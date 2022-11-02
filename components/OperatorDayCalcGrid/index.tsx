import { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";
import { dataKeys } from "../../pages/opdaycalc";
import { InputElement } from "../InputElement";
import { DisplayElement } from "../DisplayElement";
import { Spacer } from "../Spacer";
import { VerticalDisplayElement } from "../VerticalDisplayElement";
import { Label } from "../Label";
import { Content } from "../Content";
import { WideContent } from "../WideContent";

interface Props {
  formData: {
    dateOfBirth: string;
    timeOfBirth: string;
    motherYearOfBirth: string;
    calcDate: string;
    calcTime: string;
  };

  data: {
    label: string;
    content: string;
  }[][];

  handleChange(key: string, formValue: string): any;
}

export const OperatorDayCalcGrid: NextPage<Props> = (props) => {
  const { formData, data, handleChange } = props;
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.row}>
          {/* DOB, TOB, CalcDate, CalcTime */}
          <InputElement
            data={{ label: "Date", content: formData[dataKeys.calcDate] }}
            handleChange={handleChange}
            placeholder="YYYYMMDD"
            formKey={dataKeys.dateOfBirth}
          />
          <Spacer />
          <InputElement
            data={{ label: "Time", content: formData[dataKeys.calcTime] }}
            handleChange={handleChange}
            placeholder="HHMM"
            formKey={dataKeys.timeOfBirth}
          />
        </div>
      </div>
      <div className={styles.section} style={{ marginTop: "2rem" }}>
        <div className={styles.row}>
          <DisplayElement data={data[1][0]} />
          <Spacer />
          <WideContent data={data[1][1]} />
        </div>
        <div className={styles.row}>
          <DisplayElement data={data[1][2]} />
          <DisplayElement data={data[1][3]} />
          <WideContent data={data[1][4]} />
        </div>
        <div className={styles.row}>
          <DisplayElement data={data[1][5]} />
          <DisplayElement data={data[1][6]} />
          <Content data={data[1][7]} />
        </div>
        <div className={styles.row}>
          <DisplayElement data={data[1][8]} />
          <DisplayElement data={data[1][9]} />
          <Content data={data[1][10]} />
        </div>
        <div className={styles.row}>
          <Spacer />
          <Spacer />
          <Content data={data[1][11]} />
        </div>
      </div>
      <div className={styles.sideBySide}>
        <div>
          <div className={styles.section} style={{ marginTop: "2rem" }}>
            <div className={styles.row}>
              <Label customLabel="Year" />
              <VerticalDisplayElement customLabel="Client" data={data[2][0]} />
              <VerticalDisplayElement customLabel="Date" data={data[2][5]} />
            </div>
            <div className={styles.row}>
              <Label customLabel="Srog" />
              <Content data={data[2][1]} />
              <Content data={data[2][6]} />
              <Content data={data[2][10]} />
            </div>
            <div className={styles.row}>
              <Label customLabel="Lus" />
              <Content data={data[2][2]} />
              <Content data={data[2][7]} />
              <Content data={data[2][11]} />
            </div>
            <div className={styles.row}>
              <Label customLabel="Wang" />
              <Content data={data[2][3]} />
              <Content data={data[2][8]} />
              <Content data={data[2][12]} />
            </div>
            <div className={styles.row}>
              <Label customLabel="Lung" />
              <Content data={data[2][4]} />
              <Content data={data[2][9]} />
              <Content data={data[2][13]} />
            </div>
          </div>
          <div className={styles.section} style={{ marginTop: "2rem" }}>
            <div className={styles.row}>
              <Label customLabel="Month" />
              <Content data={data[3][0]} />
              <Content data={data[3][5]} />
            </div>
            <div className={styles.row}>
              <Label customLabel="Srog" />
              <Content data={data[3][1]} />
              <Content data={data[3][6]} />
              <Content data={data[3][10]} />
            </div>
            <div className={styles.row}>
              <Label customLabel="Lus" />
              <Content data={data[3][2]} />
              <Content data={data[3][7]} />
              <Content data={data[3][11]} />
            </div>
            <div className={styles.row}>
              <Label customLabel="Wang" />
              <Content data={data[3][3]} />
              <Content data={data[3][8]} />
              <Content data={data[3][12]} />
            </div>
            <div className={styles.row}>
              <Label customLabel="Lung" />
              <Content data={data[3][4]} />
              <Content data={data[3][9]} />
              <Content data={data[3][13]} />
            </div>
          </div>
          <div className={styles.section} style={{ marginTop: "2rem" }}>
            <div className={styles.row}>
              <Label customLabel="Day" />
              <Content data={data[4][0]} />
              <Content data={data[4][5]} />
            </div>
            <div className={styles.row}>
              <Label customLabel="Srog" />
              <Content data={data[4][1]} />
              <Content data={data[4][6]} />
              <Content data={data[4][10]} />
            </div>
            <div className={styles.row}>
              <Label customLabel="Lus" />
              <Content data={data[4][2]} />
              <Content data={data[4][7]} />
              <Content data={data[4][11]} />
            </div>
            <div className={styles.row}>
              <Label customLabel="Wang" />
              <Content data={data[4][3]} />
              <Content data={data[4][8]} />
              <Content data={data[4][12]} />
            </div>
            <div className={styles.row}>
              <Label customLabel="Lung" />
              <Content data={data[4][4]} />
              <Content data={data[4][9]} />
              <Content data={data[4][13]} />
            </div>
          </div>
          <div className={styles.section} style={{ marginTop: "2rem" }}>
            <div className={styles.row}>
              <Label customLabel="Hour" />
              <Content data={data[5][0]} />
              <Content data={data[5][5]} />
            </div>
            <div className={styles.row}>
              <Label customLabel="Srog" />
              <Content data={data[5][1]} />
              <Content data={data[5][6]} />
              <Content data={data[5][10]} />
            </div>
            <div className={styles.row}>
              <Label customLabel="Lus" />
              <Content data={data[5][2]} />
              <Content data={data[5][7]} />
              <Content data={data[5][11]} />
            </div>
            <div className={styles.row}>
              <Label customLabel="Wang" />
              <Content data={data[5][3]} />
              <Content data={data[5][8]} />
              <Content data={data[5][12]} />
            </div>
            <div className={styles.row}>
              <Label customLabel="Lung" />
              <Content data={data[5][4]} />
              <Content data={data[5][9]} />
              <Content data={data[5][13]} />
            </div>
          </div>
          <div className={styles.section} style={{ marginTop: "2rem" }}>
            <div className={styles.row}>
              <DisplayElement customLabel="Mewa" data={data[6][0]} />
              <Content data={data[6][1]} />
            </div>
            <div className={styles.row}>
              <DisplayElement customLabel="Parkha" data={data[6][2]} />
              <Content data={data[6][3]} />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.section} style={{ marginTop: "2rem" }}>
            <div className={styles.column}>
              <DisplayElement data={data[7][0]} />
              <DisplayElement data={data[7][1]} />
              <DisplayElement data={data[7][2]} />
            </div>
          </div>
          <div className={styles.section} style={{ marginTop: "2rem" }}>
            <div className={styles.column}>
              <Label customLabel="Lunar Dates" />
              <DisplayElement data={data[8][0]} />
              <DisplayElement data={data[8][1]} />
              <DisplayElement data={data[8][2]} />
              <DisplayElement data={data[8][3]} />
              <DisplayElement data={data[8][4]} />
              <DisplayElement data={data[8][5]} />
            </div>
          </div>
          <div className={styles.section} style={{ marginTop: "2rem" }}>
            <div className={styles.column}>
              <Label customLabel="Lunar Mansion" />
              <DisplayElement data={data[9][0]} />
              <DisplayElement data={data[9][1]} />
              <DisplayElement data={data[9][2]} />
              <DisplayElement data={data[9][3]} />
              <DisplayElement data={data[9][4]} />
              <DisplayElement data={data[9][5]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
