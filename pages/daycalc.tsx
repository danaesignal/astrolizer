import type { NextPage } from "next";
import { useState } from "react";
import styles from "../shared/styles/styles.module.css";
import { Navbar, pages } from "../components/Navbar";
import { DayCalcModal } from "../components/DayCalcModal";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { DayCalcGrid } from "../components/DayCalcGrid";
import { NatalGrid } from "../components/NatalGrid";

type args = {
  method: string;
  body: string;
};

export enum dataKeys {
  dateOfBirth = "dateOfBirth",
  timeOfBirth = "timeOfBirth",
  motherYearOfBirth = "motherYearOfBirth",
  calcDate = "calcDate",
  calcTime = "calcTime",
}

const DayCalc: NextPage = () => {
  const [data, setData] = useState();
  const [calcData, setCalcData] = useState();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    timeOfBirth: "",
    motherYearOfBirth: "",
    calcDate: "",
    calcTime: "",
  });

  const handleChange = (key: dataKeys, formValue: string): void => {
    const newData = { ...formData };
    newData[key] = formValue;
    setFormData({ ...newData });
  };

  const resetFormData = () => {
    if (data) {
      setFormData({
        dateOfBirth: data[0][0]["content"],
        timeOfBirth: data[0][1]["content"],
        motherYearOfBirth: data[0][4]["content"],
        calcDate: data[0][5]["content"],
        calcTime: data[0][5]["content"],
      });
    } else {
      setFormData({
        dateOfBirth: "",
        timeOfBirth: "",
        motherYearOfBirth: "",
        calcDate: "",
        calcTime: "",
      });
    }
  };

  const submitRequest = async (): Promise<void> => {
    setLoading(true);
    let payload: args = {
      method: "POST",
      body: JSON.stringify({
        dateOfBirth: parseInt(formData.dateOfBirth),
        timeOfBirth: parseInt(formData.timeOfBirth),
        motherYearOfBirth: parseInt(formData.motherYearOfBirth),
        calcDate: parseInt(formData.calcDate),
        calcTime: parseInt(formData.calcTime),
      }),
    };

    let res = await fetch("/api/daycalc", payload);
    let json = await res.json();
    if (json.code === 200) {
      setData(json.payload.natal);
      setCalcData(json.payload.dayCalc);
      console.log(json.payload.dayCalc);
    } else {
      console.log(`Response Code: ${json.code}`);
      console.log(`Response Message: ${json.message}`);
      alert(`${json.message}`);
    }
    setLoading(false);
  };

  if (!data && !calcData && !loading)
    return (
      <div className={styles.container}>
        <Navbar selected={pages.daycalc} />
        <div className={styles.modalContainer}>
          <DayCalcModal formData={formData} handleChange={handleChange} />
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={submitRequest}>
              Submit
            </button>
            <button className={styles.button} onClick={resetFormData}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  if (data && calcData) {
    return (
      <div className={styles.container}>
        <Navbar selected={pages.daycalc} />
        <main className={styles.main}>
          <div className={styles.gridDisplay}>
            <div className={styles.gridBox}>
              <NatalGrid
                formData={formData}
                data={data}
                handleChange={handleChange}
              />
            </div>
            <div className={styles.gridBox}>
              <DayCalcGrid
                formData={formData}
                data={calcData}
                handleChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={submitRequest}>
              Submit
            </button>
            <button className={styles.button} onClick={resetFormData}>
              Reset
            </button>
          </div>
        </main>
      </div>
    );
  }
  return (
    <div>
      <Navbar selected={pages.daycalc} />
      <LoadingSpinner />
    </div>
  );
};

export default DayCalc;
