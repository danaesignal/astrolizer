import * as data from "../../data";
import { cache, month } from ".";

export async function monthLuck(key: string, cache: cache): Promise<string> {
  const monthSign = await month(key, cache);

  const record = cache[`${monthSign}_yearsElements_combined`]
    ? cache[`${monthSign}_yearsElements_combined`]
    : await data.yearsElements.search({ query: monthSign, range: "combined" });

  if (record) {
    cache[`${monthSign}_yearsElements_combined`] = record;
    return `${record.lung}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
