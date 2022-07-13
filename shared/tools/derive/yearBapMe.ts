import * as data from "../../data";
import { cache } from ".";
import { yearKyeMe } from "./yearKyeMe";
import { yearBapMeDirection } from "./yearBapMeDirection";

export function yearBapMe(
  key: string,
  age: string,
  gender: string,
  cache: cache
): string {
  const bapMeKey = yearKyeMe(key, cache);
  const bapMeCount = (parseInt(age) % 9).toString();
  const bapMeDirection = yearBapMeDirection(gender, bapMeCount);

  const record = cache[`${key}_${yearBapMe.name}`]
    ? cache[`${key}_${yearBapMe.name}`]
    : data.mewas.search({ query: bapMeKey, range: "mewa" });

  if (record) {
    cache[`${key}_${yearBapMe.name}`] = record;
    return record[bapMeDirection];
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
