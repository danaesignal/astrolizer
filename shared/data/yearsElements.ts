import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";
import yearsElementsData from "./json/yearsElements.json";

const array: interfaces.yearsElements[] =
  yearsElementsData as interfaces.yearsElements[];

export const yearsElements = new Dataset<interfaces.yearsElements>(array);
