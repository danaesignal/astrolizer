import * as data from "../../data";
import { cache, lunarMansion } from ".";

export function lunarMansionInterp(key: string, cache: cache) {
  const lunar = lunarMansion(key, cache);

  const record = cache[`${lunar}_lunarMansions_lunarMansionName`]
    ? cache[`${lunar}_lunarMansions_lunarMansionName`]
    : data.lunarMansions.search({ query: lunar, range: "lunarMansionName" });

  if (record) {
    cache[`${lunar}_lunarMansions_lunarMansionName`] = record;
    return `${record.lunarMansionInterp}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
