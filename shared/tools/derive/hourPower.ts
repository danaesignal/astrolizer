import * as data from "../../data";
import { cache, hour } from ".";

export async function hourPower(key: string[], cache: cache): Promise<string> {
  const hourSign = await hour(key, cache);

  const record = cache[`${hourSign}_yearsElements_combined`]
    ? cache[`${hourSign}_yearsElements_combined`]
    : await data.yearsElements.search({ query: hourSign, range: "combined" });

  if (record) {
    cache[`${hourSign}_yearsElements_combined`] = record;
    return `${record.wang}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
