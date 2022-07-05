import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";
import birthParkhaData from "./json/birthParkha.json";

const array: interfaces.birthParkha[] =
  birthParkhaData as interfaces.birthParkha[];

export const birthParkha = new Dataset<interfaces.birthParkha>(array);
