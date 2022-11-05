import * as data from "../../../db/definitions";
import { cache, lunarMansion } from ".";

export async function lunarMansionInterp(
  key: string,
  cache: cache
): Promise<string> {
  const lunar = await lunarMansion(key, cache);

  const record = cache[`${lunar}_lunarMansions_lunarMansionName`]
    ? cache[`${lunar}_lunarMansions_lunarMansionName`]
    : await data.lunarMansions.search({
        query: lunar,
        range: "lunarMansionName",
      });

  if (record) {
    cache[`${lunar}_lunarMansions_lunarMansionName`] = record;
    return `${record.lunarMansionInterp}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
