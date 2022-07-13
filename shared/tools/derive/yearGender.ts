import * as data from "../../data";
import { cache, year } from ".";

export function yearGender(key: string, cache: cache) {
  const yearResult = year(key, cache);
  const record = cache[`${yearResult}_${yearGender.name}`]
    ? cache[`${yearResult}_${yearGender.name}`]
    : data.yearsElements.search({ query: key, range: "combined" });

  if (record) {
    cache[`${yearResult}_${yearGender.name}`] = record;
    return record.yearGender;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
