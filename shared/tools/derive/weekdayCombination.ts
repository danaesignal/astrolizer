import * as data from "../../data";
import { cache, lunarDayType } from ".";

export function weekdayCombination(key: string, cache: cache) {
  const dayType = lunarDayType(key, cache);

  const record = cache[`${dayType}_dayCombinations_dayCombinations`]
    ? cache[`${dayType}_dayCombinations_dayCombinations`]
    : data.dayCombinations.search({ query: dayType, range: "dayCombinations" });

  if (record) {
    cache[`${dayType}_dayCombinations_dayCombinations`] = record;
    return `${record.text}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
