import * as data from "../../data";
import { cache, month } from ".";

export function monthLifeForce(key: string, cache: cache) {
  const monthSign = month(key, cache);

  const record = cache[`${monthSign}_yearsElements_combined`]
    ? cache[`${monthSign}_yearsElements_combined`]
    : data.yearsElements.search({ query: monthSign, range: "combined" });

  if (record) {
    cache[`${monthSign}_yearsElements_combined`] = record;
    return `${record.srog}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
