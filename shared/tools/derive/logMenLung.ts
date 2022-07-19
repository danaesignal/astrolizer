import * as data from "../../data";
import { cache } from ".";
import { logMenSign } from ".";

export function logMenLung(
  age: string,
  gender: string,
  dateOfBirth: string,
  cache: cache
): string {
  const lungKey = logMenSign(age, gender, dateOfBirth, cache);

  if (lungKey) {
    const record = cache[`${lungKey}_yearsElements_combined`]
      ? cache[`${lungKey}_yearsElements_combined`]
      : data.yearsElements.offsetSearch(
          { query: lungKey, range: "combined" },
          -7
        );
    if (record) {
      cache[`${lungKey}_yearsElements_combined`] = record;
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
