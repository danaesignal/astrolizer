import * as data from "../../../db/definitions";
import { cache, year } from ".";

export async function yearBody(key: string, cache: cache): Promise<string> {
  const yearSign = await year(key, cache);

  const record = cache[`${yearSign}_yearsElements_combined`]
    ? cache[`${yearSign}_yearsElements_combined`]
    : await data.yearsElements.search({ query: yearSign, range: "combined" });

  if (record) {
    cache[`${yearSign}_yearsElements_combined`] = record;
    return `${record.lue}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
