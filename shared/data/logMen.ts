import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";
import logMenData from "./json/logMen.json";

const array: interfaces.logMen[] = logMenData as interfaces.logMen[];

export const logMen = new Dataset<interfaces.logMen>(array);
