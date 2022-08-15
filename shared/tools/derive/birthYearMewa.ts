import * as data from "../../data";
import { cache, yearKyeMe } from ".";

export function birthYearMewa(key: string, cache: cache) {
  return yearKyeMe(key, cache);
}
