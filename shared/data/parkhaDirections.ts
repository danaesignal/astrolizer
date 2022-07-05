import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";
import parkhaDirectionsData from "./json/parkhaDirections.json";

const array: interfaces.parkhaDirections[] =
  parkhaDirectionsData as interfaces.parkhaDirections[];

export const parkhaDirections = new Dataset<interfaces.parkhaDirections>(array);
