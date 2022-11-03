import type { NextPage } from "next";
import { useState } from "react";
import styles from "../shared/styles/styles.module.css";
import { Navbar, pages } from "../components/Navbar";
import { DayCalcModal } from "../components/PublicDayCalcModal";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { PublicDayCalcGrid } from "../components/PublicDayCalcGrid";

type args = {
  method: string;
  body: string;
};

export enum dataKeys {
  calcDate = "calcDate",
  calcTime = "calcTime",
}

const DayCalc: NextPage = () => {
  const [calcData, setCalcData] = useState();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    calcDate: "",
    calcTime: "",
  });

  const handleChange = (key: dataKeys, formValue: string): void => {
    const newData = { ...formData };
    newData[key] = formValue;
    setFormData({ ...newData });
  };

  const resetFormData = () => {
    if (calcData) {
      setFormData({
        calcDate: calcData[0][0]["content"],
        calcTime: calcData[0][1]["content"],
      });
    } else {
      setFormData({
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
        calcDate: parseInt(formData.calcDate),
        calcTime: parseInt(formData.calcTime),
      }),
    };

    let res = await fetch("/api/pubdaycalc", payload);
    let json = await res.json();
    if (json.code === 200) {
      console.log(json.payload.dayCalc);
      setCalcData(json.payload.dayCalc);
    } else {
      alert(`${json.message}`);
    }
    setLoading(false);
  };

  if (!calcData && !loading)
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
  if (calcData) {
    return (
      <div className={styles.container}>
        <Navbar selected={pages.daycalc} />
        <main className={styles.main}>
          <div className={styles.gridDisplay}>
            <div className={styles.gridBox}>
              <PublicDayCalcGrid
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
