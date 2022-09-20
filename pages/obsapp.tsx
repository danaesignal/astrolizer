import type { NextPage } from "next";
import type { ObsAppRequest } from "../shared/tools/buildReport/obsApp";
import { useState } from "react";
import styles from "../shared/styles/styles.module.css";
import { Navbar } from "../components/Navbar";
import { DisplayElement } from "../components/DisplayElement";
import { InputElement } from "../components/InputElement";
import { Spacer } from "../components/Spacer";
import { VerticalDisplayElement } from "../components/VerticalDisplayElement";
import { Label } from "../components/Label";
import { VerticalSpacer } from "../components/VerticalSpacer";
import { Content } from "../components/Content";
import { WideContent } from "../components/WideContent";
import { ObsAppModal } from "../components/ObsAppModal";

type args = {
  method: string;
  body: string;
};

export enum dataKeys {
  dateOfBirth = "dateOfBirth",
  timeOfBirth = "timeOfBirth",
  calcDate = "calcDate",
  calcTime = "calcTime",
  motherYearOfBirth = "motherYearOfBirth",
  gender = "gender",
}

const ObsApp: NextPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    timeOfBirth: "",
    calcDate: "",
    calcTime: "",
    motherYearOfBirth: "",
    gender: "",
  });

  const handleChange = (key: dataKeys, formValue: string): void => {
    const newData = { ...formData };
    newData[key] = formValue;
    setFormData({ ...newData });
  };

  const submitRequest = async () => {
    let payload: args = {
      method: "POST",
      body: JSON.stringify({
        dateOfBirth: parseInt(formData.dateOfBirth),
        motherYearOfBirth: parseInt(formData.motherYearOfBirth),
        timeOfBirth: parseInt(formData.timeOfBirth),
        calcDate: parseInt(formData.calcDate),
        calcTime: parseInt(formData.calcTime),
        gender: formData.gender,
      }),
    };
    let res = await fetch("/api/obsapp", payload);
    let json = await res.json();
    setData(json);
  };

  if (!data && !loading)
    return (
      <div className={styles.container}>
        <Navbar />
        <div className={styles.modalContainer}>
          <ObsAppModal formData={formData} handleChange={handleChange} />
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={submitRequest}>
              Submit
            </button>
            <button
              className={styles.button}
              onClick={() => {
                setFormData({
                  dateOfBirth: "",
                  timeOfBirth: "",
                  calcDate: "",
                  calcTime: "",
                  motherYearOfBirth: "",
                  gender: "",
                });
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  if (data) {
    return (
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>
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
              <InputElement
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
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={submitRequest}>
              Submit
            </button>
            <button
              className={styles.button}
              onClick={() => {
                setFormData({
                  dateOfBirth: data[0][0]["content"],
                  timeOfBirth: data[0][1]["content"],
                  calcDate: data[0][2]["content"],
                  calcTime: data[0][3]["content"],
                  motherYearOfBirth: data[0][4]["content"],
                  gender: data[0][5]["content"],
                });
              }}
            >
              Reset
            </button>
          </div>
        </main>
      </div>
    );
  }
  return <div>Loading!</div>;
};

export default ObsApp;
