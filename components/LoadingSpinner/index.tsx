import { NextPage } from "next";
import Loader from "react-spinners/PropagateLoader";
import styles from "../../shared/styles/styles.module.css";

export const LoadingSpinner: NextPage = () => {
  return (
    <div className={styles.loadingSpinner}>
      <Loader
        color={"#000000"}
        loading={true}
        size={10}
        speedMultiplier={0.75}
      />
    </div>
  );
};
