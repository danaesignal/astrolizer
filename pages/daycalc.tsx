import type { NextPage } from "next";
import styles from "../shared/styles/styles.module.css";
import { Navbar } from "../components/Navbar";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const DayCalc: NextPage = () => {
  const { data, error } = useSWR("/api/raw", fetcher);
  if (error) return <div>Error!</div>;
  if (!data) return <div>Loading..</div>;
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
      </header>
      <main>{JSON.stringify(data)}</main>
    </div>
  );
};

export default DayCalc;
