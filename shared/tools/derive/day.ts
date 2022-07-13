import * as data from "../../data";
import { cache } from ".";

export function day(key: string, cache: cache) {
  const record = cache[`${key}_${day.name}`]
    ? cache[`${key}_${day.name}`]
    : data.dates.search({ query: key, range: "dayDate" });

  if (record) {
    cache[`${key}_${day.name}`] = record;
    return record.dayElement + record.daySign;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
