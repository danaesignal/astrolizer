import * as data from "../../data";
import { cache, yearKyeMe, yearBapMe } from ".";

export function bapMeSign(
  dateOfBirth: string,
  age: string,
  gender: string,
  cache: cache
): string {
  const kyeMe = yearKyeMe(dateOfBirth, cache);
  const bapMe = yearBapMe(kyeMe, age, gender, cache);

  const record = cache[`${bapMe}_mewas_c`]
    ? cache[`${bapMe}_mewas_c`]
    : data.mewas.search({ query: bapMe, range: "c" });

  if (record) {
    cache[`${bapMe}_mewas_c`] = record;
    return record.c;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
