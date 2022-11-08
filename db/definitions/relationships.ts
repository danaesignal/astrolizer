import { Dataset } from "../../shared/models/Dataset";
import * as interfaces from "../../shared/interfaces";

export const relationships = new Dataset<interfaces.relationships>(
  "relationships.json"
);
