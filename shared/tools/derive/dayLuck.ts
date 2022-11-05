import * as data from "../../../db/definitions";
import { cache, day } from ".";

export async function dayLuck(key: string, cache: cache): Promise<string> {
  const daySign = await day(key, cache);

  const record = cache[`${daySign}_yearsElements_combined`]
    ? cache[`${daySign}_yearsElements_combined`]
    : await data.yearsElements.search({ query: daySign, range: "combined" });

  if (record) {
    cache[`${daySign}_yearsElements_combined`] = record;
    return `${record.lung}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
