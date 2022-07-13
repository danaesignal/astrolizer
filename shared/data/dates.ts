import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";
import datesData from "./json/dates.json";

const array: interfaces.datesRecord[] = datesData as interfaces.datesRecord[];

export const dates = new Dataset<interfaces.datesRecord>(array);
