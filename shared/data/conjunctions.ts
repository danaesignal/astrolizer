import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";

export const conjunctions = new Dataset<interfaces.conjunctions>(
  "conjunctions.json"
);
