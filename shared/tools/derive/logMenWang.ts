import * as data from "../../data";
import { cache } from ".";
import { logMenSign } from ".";

export function logMenWang(
  age: string,
  gender: string,
  dateOfBirth: string,
  cache: cache
): string {
  const wangKey = logMenSign(age, gender, dateOfBirth, cache);

  if (wangKey) {
    const record = cache[`${wangKey}_yearsElements_combined}`]
      ? cache[`${wangKey}_yearsElements_combined`]
      : data.yearsElements.offsetSearch(
          { query: wangKey, range: "combined" },
          7
        );
    if (record) {
      cache[`${wangKey}_yearsElements_combined`] = record;
      return record.combined;
    } else {
      throw new Error(
        "Lookup failed. This should not happen, please contact support."
      );
    }
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
