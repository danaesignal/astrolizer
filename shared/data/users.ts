import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";

export const users = new Dataset<interfaces.users>("users.json");
