import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";
import relationshipsData from "./json/relationships.json";

const array: interfaces.relationships[] =
  relationshipsData as interfaces.relationships[];

export const relationships = new Dataset<interfaces.relationships>(array);
