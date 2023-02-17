import * as data from "../../../db/definitions";
import { cache } from ".";

export async function yearBapPar(
  age: string,
  gender: string,
  cache: cache
): Promise<string> {
  const key = gender === "male" ? "Li" : "Kham";
  const parsedAge = parseInt(age) - 1;
  const offset = gender === "male" ? -1 * parsedAge : parsedAge;
  const record = cache[`${key}_birthParkha_kye-Parkha_${offset.toString()}`]
    ? cache[`${key}_birthParkha_kye-Parkha_${offset.toString()}`]
    : await data.birthParkha.offsetSearch(
        { query: key, range: "kye-Parkha" },
        offset
      );
  if (record) {
    cache[`${key}_birthParkha_kye-Parkha_${offset.toString()}`] = record;
    return record["kye-Parkha"];
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
