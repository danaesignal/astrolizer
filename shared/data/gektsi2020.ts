import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";
import gektsi2020Data from "./json/gektsi2020.json";

const array: interfaces.gektsi2020[] =
  gektsi2020Data as interfaces.gektsi2020[];

export const gektsi2020 = new Dataset<interfaces.gektsi2020>(array);
