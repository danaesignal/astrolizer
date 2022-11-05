import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";

export const yearsElements = new Dataset<interfaces.yearsElements>(
  "yearsElements.json"
);
