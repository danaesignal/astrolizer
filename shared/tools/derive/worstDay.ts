import * as data from "../../data";
import { cache, year } from ".";

export function worstDay(key: string, cache: cache) {
  const sign = year(key, cache);
  const record = cache[`${sign}_yearsElements_combined`]
    ? cache[`${sign}_yearsElements_combined`]
    : data.yearsElements.search({ query: sign, range: "combined" });

  if (record) {
    cache[`${sign}_yearsElements_combined`] = record;
    return `${record.worstDay}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
