import * as data from "../../data";
import { cache, year } from ".";

export async function yearGender(key: string, cache: cache): Promise<string> {
  const yearResult = await year(key, cache);
  const record = cache[`${yearResult}_yearsElements_combined`]
    ? cache[`${yearResult}_yearsElements_combined`]
    : await data.yearsElements.search({ query: yearResult, range: "combined" });

  if (record) {
    cache[`${yearResult}_yearsElements_combined`] = record;
    return record.gender;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
