import type { NextPage } from "next";
import styles from "../shared/styles/styles.module.css";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
      </header>
      Yo.
    </div>
  );
};

export default Home;
