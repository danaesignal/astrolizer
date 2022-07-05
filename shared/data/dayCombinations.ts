import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";
import dayCombinationsData from "./json/dayCombinations.json";

const array: interfaces.dayCombinations[] =
  dayCombinationsData as interfaces.dayCombinations[];

export const dayCombinations = new Dataset<interfaces.dayCombinations>(array);
