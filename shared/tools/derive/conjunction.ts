import * as data from "../../data";
import { cache, lunarMansion, weekday } from ".";

export function conjunction(key: string, cache: cache) {
  const day = weekday(key, cache).toLowerCase();
  const mansion = lunarMansion(key, cache);

  const record = cache[`${mansion}_conjunctions_${day}`]
    ? cache[`${mansion}_conjunctions_${day}`]
    : data.conjunctions.search({ query: mansion, range: day });

  if (record) {
    cache[`${mansion}_conjunctions_${day}`] = record;
    return `${record.conjunction}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
