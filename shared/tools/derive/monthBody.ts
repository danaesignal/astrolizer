import * as data from "../../../db/definitions";
import { cache, month } from ".";

export async function monthBody(key: string, cache: cache): Promise<string> {
  const monthSign = await month(key, cache);

  const record = cache[`${monthSign}_yearsElements_combined`]
    ? cache[`${monthSign}_yearsElements_combined`]
    : await data.yearsElements.search({ query: monthSign, range: "combined" });

  if (record) {
    cache[`${monthSign}_yearsElements_combined`] = record;
    return `${record.lue}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
