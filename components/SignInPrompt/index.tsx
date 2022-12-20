import { NextPage } from "next";
import styles from "../../shared/styles/styles.module.css";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { LoadingSpinner } from "../LoadingSpinner";

export const SignInPrompt: NextPage = () => {
  const [loading, setLoading] = useState(false);
  if (loading) return <LoadingSpinner />;
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.signIn}>
          <div className={styles.signInPrompt}>
            <div className={styles.signInMessage}>
              Please sign in to access this page.
            </div>
            <div className={styles.signInButtonContainer}>
              <div
                className={styles.button}
                onClick={() => {
                  signIn();
                  setLoading(true);
                }}
              >
                Sign In
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
