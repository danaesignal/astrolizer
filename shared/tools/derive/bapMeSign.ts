import * as data from "../../data";
import { cache, yearBapMe } from ".";

export function bapMeSign(
  dateOfBirth: string,
  age: string,
  gender: string,
  cache: cache
): string {
  const bapMe = yearBapMe(dateOfBirth, age, gender, cache);

  const record = cache[`${bapMe}_mewas_c`]
    ? cache[`${bapMe}_mewas_c`]
    : data.mewas.search({ query: bapMe, range: "c" });

  if (record) {
    cache[`${bapMe}_mewas_c`] = record;
    return record.mewa;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
