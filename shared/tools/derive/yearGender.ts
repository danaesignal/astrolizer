import * as data from "../../data";
import { cache, year } from ".";

export function yearGender(key: string, cache: cache) {
  const yearResult = year(key, cache);
  const record = cache[`${key}_yearsElements_combined`]
    ? cache[`${key}_yearsElements_combined`]
    : data.yearsElements.search({ query: yearResult, range: "combined" });

  if (record) {
    cache[`${key}_yearsElements_combined`] = record;
    return record.yearGender;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
