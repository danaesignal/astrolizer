import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";

export const parkhaDirections = new Dataset<interfaces.parkhaDirections>(
  "parkhaDirections.json"
);
