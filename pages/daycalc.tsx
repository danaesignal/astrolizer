import type { NextPage } from "next";
import styles from "../shared/styles/styles.module.css";
import { Navbar } from "../components/Navbar";

const DayCalc: NextPage = () => {
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
      </header>
      <main>{/* Content goes here */}</main>
    </div>
  );
};

export default DayCalc;
