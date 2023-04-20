import type { NextPage } from "next";
import { dataKeys } from "../../pages/admin";
import { TextInputElement } from "../TextInputElement";

interface Props {
  formData: {
    username: string;
    oldPassword: string;
    newPassword: string;
    newPasswordConfirm: string;
  };
  handleChange(key: string, formValue: string): any;
}

export const AdminForm: NextPage<Props> = (props) => {
  const { formData, handleChange } = props;

  return (
    <div>
      <TextInputElement
        data={{ label: "Username", content: formData[dataKeys.username] }}
        handleChange={handleChange}
        placeholder=""
        formKey={dataKeys.username}
      />
      <TextInputElement
        data={{ label: "Password", content: formData[dataKeys.oldPassword] }}
        handleChange={handleChange}
        placeholder=""
        formKey={dataKeys.oldPassword}
        hideInput
      />
      <TextInputElement
        data={{
          label: "New Password",
          content: formData[dataKeys.newPassword],
        }}
        handleChange={handleChange}
        placeholder=""
        formKey={dataKeys.newPassword}
      />
      <TextInputElement
        data={{
          label: "Confirm New Password",
          content: formData[dataKeys.newPasswordConfirm],
        }}
        handleChange={handleChange}
        placeholder=""
        formKey={dataKeys.newPasswordConfirm}
      />
    </div>
  );
};
