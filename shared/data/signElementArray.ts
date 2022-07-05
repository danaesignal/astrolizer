import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";
import signElementArrayData from "./json/signElementArray.json";

const array: interfaces.signElementArray[] =
  signElementArrayData as interfaces.signElementArray[];

export const signElementArray = new Dataset<interfaces.signElementArray>(array);
