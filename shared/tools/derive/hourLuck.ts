import * as data from "../../data";
import { cache, hour } from ".";

export function hourLuck(key: string[], cache: cache) {
  const hourSign = hour(key, cache);

  const record = cache[`${hourSign}_yearsElements_combined`]
    ? cache[`${hourSign}_yearsElements_combined`]
    : data.yearsElements.search({ query: hourSign, range: "combined" });

  if (record) {
    cache[`${hourSign}_yearsElements_combined`] = record;
    return `${record.lung}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
