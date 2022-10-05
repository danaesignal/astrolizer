import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../shared/styles/styles.module.css";

interface Props {
  selected: string;
}

export enum pages {
  obsapp = "OBSAPP",
  natal = "NATAL",
  daycalc = "DAYCALC",
}

export const Navbar: NextPage<Props> = (props) => {
  const { selected } = props;
  const obsAppStyles =
    selected == pages.obsapp ? styles.active : styles.inactive;
  const natalStyles = selected == pages.natal ? styles.active : styles.inactive;
  const dayCalcStyles =
    selected == pages.daycalc ? styles.active : styles.inactive;
  return (
    <div className={styles.navbar}>
      <div className={styles.navigation}>
        <Link href="/obsapp">
          <div className={obsAppStyles}>ObsApp</div>
        </Link>
        <div className={natalStyles}>
          <Link href="/natal">Natal</Link>
        </div>
        <div className={dayCalcStyles}>
          <Link href="/daycalc">DayCalc</Link>
        </div>
      </div>
    </div>
  );
};
