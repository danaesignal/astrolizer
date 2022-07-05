import { Dataset } from "../models/Dataset";
import * as interfaces from "../interfaces";
import mewasData from "./json/mewas.json";

const array: interfaces.mewas[] = mewasData as interfaces.mewas[];

export const mewas = new Dataset<interfaces.mewas>(array);
