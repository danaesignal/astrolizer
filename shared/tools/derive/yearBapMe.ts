import * as data from "../../../db/definitions";
import { cache } from ".";
import { yearKyeMe } from "./yearKyeMe";
import { yearBapMeDirection } from "./yearBapMeDirection";

export async function yearBapMe(
  key: string,
  age: string,
  gender: string,
  cache: cache
): Promise<string> {
  const bapMeKey = await yearKyeMe(key, cache);
  const bapMeCount = (parseInt(age) % 9).toString();
  const bapMeDirection = yearBapMeDirection(
    gender.toLocaleLowerCase(),
    bapMeCount
  );

  const record = cache[`${key}_mewas_mewa`]
    ? cache[`${key}_mewas_mewa`]
    : await data.mewas.search({ query: bapMeKey, range: "mewa" });

  if (record) {
    cache[`${key}_mewas_mewa`] = record;
    return record[bapMeDirection];
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
