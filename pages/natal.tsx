import type { NextPage } from "next";
import { useState } from "react";
import styles from "../shared/styles/styles.module.css";
import { Navbar, pages } from "../components/Navbar";
import { NatalModal } from "../components/NatalModal";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { NatalGrid } from "../components/NatalGrid";

type args = {
  method: string;
  body: string;
};

export enum dataKeys {
  dateOfBirth = "dateOfBirth",
  timeOfBirth = "timeOfBirth",
  motherYearOfBirth = "motherYearOfBirth",
}

const Natal: NextPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    timeOfBirth: "",
    motherYearOfBirth: "",
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
      });
    } else {
      setFormData({
        dateOfBirth: "",
        timeOfBirth: "",
        motherYearOfBirth: "",
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
      }),
    };

    let res = await fetch("/api/natal", payload);
    let json = await res.json();
    if (json.code === 200) {
      setData(json.payload);
      console.log(json.payload[4]);
    } else {
      console.log(`Response Code: ${json.code}`);
      console.log(`Response Message: ${json.message}`);
      alert(`${json.message}`);
    }
    setLoading(false);
  };

  if (!data && !loading)
    return (
      <div className={styles.container}>
        <Navbar selected={pages.natal} />
        <div className={styles.modalContainer}>
          <NatalModal formData={formData} handleChange={handleChange} />
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
  if (data) {
    return (
      <div className={styles.container}>
        <Navbar selected={pages.natal} />
        <main className={styles.main}>
          <NatalGrid
            formData={formData}
            data={data}
            handleChange={handleChange}
          />
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
      <Navbar selected={pages.natal} />
      <LoadingSpinner />
    </div>
  );
};

export default Natal;
