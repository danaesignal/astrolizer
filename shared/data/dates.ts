import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";
import datesData from "./json/dates.json";

const array: interfaces.rawRecord[] = datesData as interfaces.rawRecord[];

export const dates = new Dataset<interfaces.rawRecord>(array);
