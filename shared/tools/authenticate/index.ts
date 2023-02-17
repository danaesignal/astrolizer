import { users as userData } from "../../../db/definitions/users";
import * as interfaces from "../../interfaces";
import bcrypt from "bcrypt";

export type AuthenticateRequest = {
  username: string | undefined;
  password: string | undefined;
};

export class Authenticate {
  private input;
  constructor(request: AuthenticateRequest) {
    this.input = {
      username: request.username,
      password: request.password,
    };
  }

  static async updateUser(
    updatedUser: interfaces.users
  ): Promise<interfaces.users> {
    let dataDoesExist = await userData.buildDefaultUsers();
    if (dataDoesExist) {
      let userRecord = await userData.search({
        query: updatedUser.uid,
        range: "uid",
      });
      if (userRecord) {
        const updatedPasswordHash = await bcrypt.hash(updatedUser.password, 10);
        const updateDidSucceed = await userData.upsert({
          record: { ...updatedUser, password: updatedPasswordHash },
          position: { query: updatedUser.uid, range: "uid" },
        });
        if (updateDidSucceed) {
          return updatedUser;
        } else {
          throw new Error(
            "User update failed midstream. This should not happen, please contact support."
          );
        }
      } else {
        throw new Error("User not found.");
      }
    } else {
      throw new Error("Database is unreachable. Please contact support.");
    }
  }

  async retrieveUser(): Promise<interfaces.users> {
    let dataDoesExist = await userData.buildDefaultUsers();
    if (dataDoesExist) {
      if (!this.input.username || !this.input.password) {
        throw new Error("Please enter both a username and a password.");
      }
      const user = await userData.search({
        query: this.input.username,
        range: "username",
      });
      if (user) {
        const valid = await bcrypt.compare(this.input.password, user.password);
        if (valid) {
          return user;
        } else {
          throw new Error(
            "Password is incorrect. Please check your credentials."
          );
        }
      } else {
        throw new Error("User not found. Please check your credentials.");
      }
    } else {
      throw new Error("Database is unreachable. Please contact support.");
    }
  }
}
