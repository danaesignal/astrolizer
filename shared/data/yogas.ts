import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";
import yogasData from "./json/yogas.json";

const array: interfaces.yogas[] = yogasData as interfaces.yogas[];

export const yogas = new Dataset<interfaces.yogas>(array);
