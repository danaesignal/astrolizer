import * as data from "../../data";
import { cache } from ".";

export function destructionStar(key: string, cache: cache) {
  const record = cache[`${key}_dates_dayDate`]
    ? cache[`${key}_dates_dayDate`]
    : data.dates.search({ query: key, range: "dayDate" });

  if (record) {
    cache[`${key}_dates_dayDate`] = record;
    return `${record.destructionStar}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}