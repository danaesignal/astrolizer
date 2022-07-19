import * as data from "../../data";
import { cache, bapMeSign } from ".";

export function bapMeElement(
  dateOfBirth: string,
  age: string,
  gender: string,
  cache: cache
): string {
  const sign = bapMeSign(dateOfBirth, age, gender, cache);

  const record = cache[`${sign}_mewas_mewa`]
    ? cache[`${sign}_mewas_mewa`]
    : data.mewas.search({ query: sign, range: "mewa" });

  if (record) {
    cache[`${sign}_mewas_mewa`] = record;
    return record.element;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
