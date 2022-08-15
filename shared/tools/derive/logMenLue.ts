import * as data from "../../data";
import { cache } from ".";
import { logMenSign } from ".";

export function logMenLue(
  age: string,
  gender: string,
  dateOfBirth: string,
  cache: cache
): string {
  const lueKey = logMenSign(age, gender, dateOfBirth, cache);

  if (lueKey) {
    const record = cache[`${lueKey}_yearsElements_combined_-4`]
      ? cache[`${lueKey}_yearsElements_combined_-4`]
      : data.yearsElements.offsetSearch(
          { query: lueKey, range: "combined" },
          -4
        );
    if (record) {
      cache[`${lueKey}_yearsElements_combined_-4`] = record;
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
