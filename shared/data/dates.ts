import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";

export const dates = new Dataset<interfaces.datesRecord>("dates.json");
