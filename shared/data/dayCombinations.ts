import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";

export const dayCombinations = new Dataset<interfaces.dayCombinations>(
  "dayCombinations.json"
);
