import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";

export const dargudFunctions = new Dataset<interfaces.dargudFunctions>(
  "dargudFunctions.json"
);
