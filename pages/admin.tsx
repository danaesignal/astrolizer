import type { NextPage } from "next";
import { useState } from "react";
import styles from "../shared/styles/styles.module.css";
import { Navbar, pages } from "../components/Navbar";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { SignInPrompt } from "../components/SignInPrompt";
import { useSession } from "next-auth/react";
import { AdminForm } from "../components/AdminForm";

type args = {
  method: string;
  body: string;
};

export enum dataKeys {
  // Replace with proper data keys
  username = "username",
  oldPassword = "oldPassword",
  newPassword = "newPassword",
  newPasswordConfirm = "newPasswordConfirm",
}

const Admin: NextPage = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    oldPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const handleChange = (key: dataKeys, formValue: string): void => {
    const newData = { ...formData };
    newData[key] = formValue;
    setFormData({ ...newData });
  };

  const resetFormData = () => {
    setFormData({
      username: "",
      oldPassword: "",
      newPassword: "",
      newPasswordConfirm: "",
    });
  };

  const submitRequest = async (): Promise<void> => {
    setLoading(true);
    let payload: args = {
      method: "POST",
      body: JSON.stringify({
        // Replace with appropriate properties
        username: formData.username,
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword,
        newPasswordConfirm: formData.newPasswordConfirm,
      }),
    };

    let res = await fetch("/api/admin/updateuser", payload);
    let json = await res.json();
    if (json.code === 200) {
      alert(`User "${json.payload.username}" password updated successfully.`);
      resetFormData();
    } else {
      alert(`${json.message}`);
    }
    setLoading(false);
  };

  if (!session || session.user.role !== "admin")
    return (
      <div>
        <Navbar selected={pages.admin} />
        <SignInPrompt />
      </div>
    );
  if (!loading)
    return (
      <div className={styles.container}>
        <Navbar selected={pages.admin} />
        <div className={styles.modalContainer}>
          <AdminForm formData={formData} handleChange={handleChange} />
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
  return (
    <div>
      <Navbar selected={pages.admin} />
      <LoadingSpinner />
    </div>
  );
};

export default Admin;
