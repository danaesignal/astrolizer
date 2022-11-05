import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";

export const relationships = new Dataset<interfaces.relationships>(
  "relationships.json"
);
