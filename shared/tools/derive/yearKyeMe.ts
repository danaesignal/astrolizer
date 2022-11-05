import * as data from "../../data";
import { cache } from ".";

export async function yearKyeMe(key: string, cache: cache): Promise<string> {
  const record = cache[`${key}_dates_dayDate`]
    ? cache[`${key}_dates_dayDate`]
    : await data.dates.search({ query: key, range: "dayDate" });

  if (record) {
    cache[`${key}_dates_dayDate`] = record;
    return record.yearKyeMe;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
