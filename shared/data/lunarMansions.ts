import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";
import lunarMansionsData from "./json/lunarMansions.json";

const array: interfaces.lunarMansions[] =
  lunarMansionsData as interfaces.lunarMansions[];

export const lunarMansions = new Dataset<interfaces.lunarMansions>(array);
