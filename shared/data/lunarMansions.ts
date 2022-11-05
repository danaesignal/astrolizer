import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";

export const lunarMansions = new Dataset<interfaces.lunarMansions>(
  "lunarMansions.json"
);
