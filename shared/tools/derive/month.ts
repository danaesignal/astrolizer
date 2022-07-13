import * as data from "../../data";
import { cache } from ".";

export function month(key: string, cache: cache) {
  const record = cache[`${key}_${month.name}`]
    ? cache[`${key}_${month.name}`]
    : data.dates.search({ query: key, range: "dayDate" });

  if (record) {
    cache[`${key}_${month.name}`] = record;
    return record.monthSign + record.monthElement;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
