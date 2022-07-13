import * as data from "../../data";
import { cache } from ".";

export function year(key: string, cache: cache) {
  const record = cache[`${key}_${year.name}`]
    ? cache[`${key}_${year.name}`]
    : data.dates.search({ query: key, range: "dayDate" });

  if (record) {
    cache[`${key}_${year.name}`] = record;
    return record.yearSign + record.yearElement;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
