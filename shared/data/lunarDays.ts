import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";
import lunarDaysData from "./json/lunarDays.json";

const array: interfaces.lunarDays[] = lunarDaysData as interfaces.lunarDays[];

export const lunarDays = new Dataset<interfaces.lunarDays>(array);
