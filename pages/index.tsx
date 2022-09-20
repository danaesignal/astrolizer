import type { NextPage } from "next";
import styles from "../shared/styles/styles.module.css";
import { Navbar } from "../components/Navbar";
import { DisplayElement } from "../components/DisplayElement";
import { InputElement } from "../components/InputElement";
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
      <main className={styles.main}>
        <div className={styles.section}>
          <InputElement label={data[0][0].label} content={data[0][0].content} />
          <DisplayElement
            label={data[0][1].label}
            content={data[0][1].content}
          />
          <DisplayElement
            label={data[0][2].label}
            content={data[0][2].content}
          />
          <DisplayElement
            label={data[0][3].label}
            content={data[0][3].content}
          />
          <DisplayElement
            label={data[0][4].label}
            content={data[0][4].content}
          />
        </div>
        <div className={styles.section}>
          <DisplayElement
            label={data[1][0].label}
            content={data[1][0].content}
          />
          <DisplayElement
            label={data[1][1].label}
            content={data[1][1].content}
          />
          <DisplayElement
            label={data[1][2].label}
            content={data[1][2].content}
          />
          <DisplayElement
            label={data[1][3].label}
            content={data[1][3].content}
          />
          <DisplayElement
            label={data[1][4].label}
            content={data[1][4].content}
          />
        </div>
      </main>
    </div>
  );
};

export default DayCalc;
