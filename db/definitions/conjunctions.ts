import { Dataset } from "../../shared/models/Dataset";
import * as interfaces from "../../shared/interfaces";

export const conjunctions = new Dataset<interfaces.conjunctions>(
  "conjunctions.json"
);
