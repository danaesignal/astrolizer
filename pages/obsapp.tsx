import type { NextPage } from "next";
import { useState, useEffect } from "react";
import styles from "../shared/styles/styles.module.css";
import { Navbar, pages } from "../components/Navbar";
import { ObsAppModal } from "../components/ObsAppModal";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ObsAppGrid } from "../components/ObsAppGrid";
import { SignInPrompt } from "../components/SignInPrompt";
import { useSession, signIn, signOut } from "next-auth/react";

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
  const { data: session } = useSession();
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

  const resetFormData = () => {
    if (data) {
      setFormData({
        dateOfBirth: data[0][0]["content"],
        timeOfBirth: data[0][1]["content"],
        calcDate: data[0][2]["content"],
        calcTime: data[0][3]["content"],
        motherYearOfBirth: data[0][4]["content"],
        gender: data[0][5]["content"],
      });
    } else {
      setFormData({
        dateOfBirth: "",
        timeOfBirth: "",
        calcDate: "",
        calcTime: "",
        motherYearOfBirth: "",
        gender: "",
      });
    }
  };

  const submitRequest = async (): Promise<void> => {
    setLoading(true);
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
    if (json.code === 200) {
      setData(json.payload);
    } else {
      alert(`${json.message}`);
    }
    setLoading(false);
  };

  if (!session)
    return (
      <div>
        <Navbar selected={pages.obsApp} />
        <SignInPrompt />
      </div>
    );

  if (!data && !loading)
    return (
      <div className={styles.container}>
        <Navbar selected={pages.obsApp} />
        <div className={styles.modalContainer}>
          <ObsAppModal formData={formData} handleChange={handleChange} />
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
        <Navbar selected={pages.obsApp} />
        <main className={styles.main}>
          <ObsAppGrid
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
      <Navbar selected={pages.obsApp} />
      <LoadingSpinner />
    </div>
  );
};

export default ObsApp;
