import { Dataset } from "../../shared/models/Dataset";
import * as interfaces from "../../shared/interfaces";
import bcrypt from "bcrypt";

class UsersDataset extends Dataset<interfaces.users> {
  private defaultUsers;
  constructor(filename: string) {
    super(filename);
    this.defaultUsers = [
      {
        uid: "1",
        username: "admin",
        password: "password",
        displayName: "Admin",
        role: "admin",
      },
      {
        uid: "2",
        username: "operator",
        password: "password",
        displayName: "Operator",
        role: "op",
      },
      {
        uid: "3",
        username: "client",
        password: "password",
        displayName: "Client",
        role: "client",
      },
    ];
  }

  async buildDefaultUsers(): Promise<boolean> {
    const hashedDefaultPassword = await bcrypt.hash("password", 10);
    const preparedDefaultUsers = this.defaultUsers.map((user) => {
      return { ...user, password: hashedDefaultPassword };
    });
    return await this.initialize(preparedDefaultUsers);
  }
}

export const users = new UsersDataset("users.json");

// ToDo: find a clever way to ensure that buildDefaultUsers has run and resolved
// before performing any DB actions, irrespective of if it actually built a new DB
