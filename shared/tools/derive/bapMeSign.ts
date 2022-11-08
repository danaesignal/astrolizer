import * as data from "../../../db/definitions";
import { cache, yearBapMe } from ".";

export async function bapMeSign(
  dateOfBirth: string,
  age: string,
  gender: string,
  cache: cache
): Promise<string> {
  const bapMe = await yearBapMe(dateOfBirth, age, gender, cache);

  const record = cache[`${bapMe}_mewas_c`]
    ? cache[`${bapMe}_mewas_c`]
    : await data.mewas.search({ query: bapMe, range: "c" });

  if (record) {
    cache[`${bapMe}_mewas_c`] = record;
    return record.mewa;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
