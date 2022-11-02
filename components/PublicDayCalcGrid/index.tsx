import { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";
import { dataKeys } from "../../pages/daycalc";
import { InputElement } from "../InputElement";
import { DisplayElement } from "../DisplayElement";
import { Spacer } from "../Spacer";
import { Label } from "../Label";
import { Content } from "../Content";
import { VeryWideContent } from "../VeryWideContent";

interface Props {
  formData: {
    calcDate: string;
    calcTime: string;
  };

  data: {
    label: string;
    content: string;
  }[][];

  handleChange(key: string, formValue: string): any;
}

export const PublicDayCalcGrid: NextPage<Props> = (props) => {
  const { formData, data, handleChange } = props;
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.row}>
          {/* CalcDate, CalcTime */}
          <InputElement
            data={{ label: "Date", content: formData[dataKeys.calcDate] }}
            handleChange={handleChange}
            placeholder="YYYYMMDD"
            formKey={dataKeys.calcDate}
          />
          <Spacer />
          <InputElement
            data={{ label: "Time", content: formData[dataKeys.calcTime] }}
            handleChange={handleChange}
            placeholder="HHMM"
            formKey={dataKeys.calcTime}
          />
        </div>
      </div>
      <div className={styles.section} style={{ marginTop: "2rem" }}>
        <div className={styles.row}>
          <DisplayElement data={data[1][0]} />
          <Spacer />
          <VeryWideContent data={data[1][1]} />
        </div>
        <div className={styles.row}>
          <DisplayElement data={data[1][2]} />
          <DisplayElement data={data[1][3]} />
          <VeryWideContent data={data[1][4]} />
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
              <Label customLabel="Client" />
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <DisplayElement customLabel="Year" data={data[2][0]} />
                <DisplayElement customLabel="Srog" data={data[2][1]} />
                <DisplayElement customLabel="Lus" data={data[2][2]} />
                <DisplayElement customLabel="Wang" data={data[2][3]} />
                <DisplayElement customLabel="Lung" data={data[2][4]} />
              </div>
              <div className={styles.column}>
                <DisplayElement customLabel="Month" data={data[3][0]} />
                <DisplayElement customLabel="Srog" data={data[3][1]} />
                <DisplayElement customLabel="Lus" data={data[3][2]} />
                <DisplayElement customLabel="Wang" data={data[3][3]} />
                <DisplayElement customLabel="Lung" data={data[3][4]} />
              </div>
              <div className={styles.column}>
                <DisplayElement customLabel="Day" data={data[4][0]} />
                <DisplayElement customLabel="Srog" data={data[4][1]} />
                <DisplayElement customLabel="Lus" data={data[4][2]} />
                <DisplayElement customLabel="Wang" data={data[4][3]} />
                <DisplayElement customLabel="Lung" data={data[4][4]} />
              </div>
              <div className={styles.column}>
                <DisplayElement customLabel="Hour" data={data[5][0]} />
                <DisplayElement customLabel="Srog" data={data[5][1]} />
                <DisplayElement customLabel="Lus" data={data[5][2]} />
                <DisplayElement customLabel="Wang" data={data[5][3]} />
                <DisplayElement customLabel="Lung" data={data[5][4]} />
              </div>
            </div>
          </div>

          <div className={styles.section} style={{ marginTop: "2rem" }}>
            <div className={styles.row}>
              <DisplayElement customLabel="Mewa" data={data[6][0]} />
            </div>
            <div className={styles.row}>
              <DisplayElement customLabel="Parkha" data={data[6][2]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
