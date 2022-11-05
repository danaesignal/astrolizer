import * as data from "../../data";
import { cache, yearKyeMe } from ".";

export async function yearMewa(key: string, cache: cache): Promise<string> {
  return yearKyeMe(key, cache);
}
