import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";
import logMenInterpData from "./json/logMenInterp.json";

const array: interfaces.logMenInterp[] =
  logMenInterpData as interfaces.logMenInterp[];

export const logMenInterp = new Dataset<interfaces.logMenInterp>(array);
