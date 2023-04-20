import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import styles from "../../shared/styles/styles.module.css";

interface Props {
  selected: string;
}

export enum pages {
  obsApp = "OBSAPP",
  natal = "NATAL",
  dayCalc = "DAYCALC",
  opDayCalc = "OPDAYCALC",
  admin = "ADMIN",
}

export const Navbar: NextPage<Props> = (props) => {
  const { selected } = props;
  const { data: session } = useSession();
  const obsAppStyles =
    selected == pages.obsApp ? styles.active : styles.inactive;
  const natalStyles = selected == pages.natal ? styles.active : styles.inactive;
  const dayCalcStyles =
    selected == pages.dayCalc ? styles.active : styles.inactive;
  const opDayCalcStyles =
    selected == pages.opDayCalc ? styles.active : styles.inactive;
  const adminPageStyles =
    selected == pages.admin ? styles.active : styles.inactive;
  return (
    <div className={styles.navbar}>
      <div className={styles.navigation}>
        <Link href="/obsapp">
          <div className={obsAppStyles}>ObsApp</div>
        </Link>

        {session && session.user.role !== "client" && (
          <Link href="/natal">
            <div className={natalStyles}>Natal</div>
          </Link>
        )}

        <Link href="/daycalc">
          <div className={dayCalcStyles}>
            {session && session.user.role !== "client" ? "Client " : null}
            DayCalc
          </div>
        </Link>

        {session && session.user.role !== "client" && (
          <Link href="/opdaycalc">
            <div className={opDayCalcStyles}>Operator DayCalc</div>
          </Link>
        )}
        {session && session.user.role === "admin" && (
          <Link href="/admin">
            <div className={adminPageStyles}>Admin Panel</div>
          </Link>
        )}
      </div>
      <div>
        <div
          className={styles.inactive}
          onClick={() => {
            signOut();
          }}
          style={{ display: session ? "flex" : "none" }}
        >
          Sign Out
        </div>
      </div>
    </div>
  );
};
