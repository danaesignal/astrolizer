import * as data from "../../data";
import { cache, year } from ".";

export function yearBody(key: string, cache: cache) {
  const yearSign = year(key, cache);

  const record = cache[`${yearSign}_yearsElements_combined`]
    ? cache[`${yearSign}_yearsElements_combined`]
    : data.yearsElements.search({ query: yearSign, range: "combined" });

  if (record) {
    cache[`${yearSign}_yearsElements_combined`] = record;
    return `${record.lue}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
