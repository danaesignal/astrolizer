import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";
import conjunctionsData from "./json/conjunctions.json";

const array: interfaces.conjunctions[] =
  conjunctionsData as interfaces.conjunctions[];

export const conjunctions = new Dataset<interfaces.conjunctions>(array);
