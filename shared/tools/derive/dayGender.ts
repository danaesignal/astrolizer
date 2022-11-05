import * as data from "../../data";
import { cache, day } from ".";

export async function dayGender(key: string, cache: cache): Promise<string> {
  const daySign = await day(key, cache);

  const record = cache[`${daySign}_yearsElements_combined`]
    ? cache[`${daySign}_yearsElements_combined`]
    : await data.yearsElements.search({ query: daySign, range: "combined" });

  if (record) {
    cache[`${daySign}_yearsElements_combined`] = record;
    return `${record.gender}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
