import * as data from "../../data";
import { cache, day } from ".";

export function dayLuck(key: string, cache: cache) {
  const daySign = day(key, cache);

  const record = cache[`${daySign}_yearsElements_combined`]
    ? cache[`${daySign}_yearsElements_combined`]
    : data.yearsElements.search({ query: daySign, range: "combined" });

  if (record) {
    cache[`${daySign}_yearsElements_combined`] = record;
    return `${record.lung}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
