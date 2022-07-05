import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";
import dargudFunctionsData from "./json/dargudFunctions.json";

const array: interfaces.dargudFunctions[] =
  dargudFunctionsData as interfaces.dargudFunctions[];

export const dargudFunctions = new Dataset<interfaces.dargudFunctions>(array);
