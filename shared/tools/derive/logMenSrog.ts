import * as data from "../../data";
import { cache } from ".";
import { logMenSign } from ".";

export function logMenSrog(
  age: string,
  gender: string,
  dateOfBirth: string,
  cache: cache
): string {
  const srogKey = logMenSign(age, gender, dateOfBirth, cache);

  if (srogKey) {
    const record = cache[`${srogKey}_yearsElements_combined`]
      ? cache[`${srogKey}_yearsElements_combined`]
      : data.yearsElements.offsetSearch(
          { query: srogKey, range: "combined" },
          4
        );
    if (record) {
      cache[`${srogKey}_yearsElements_combined`] = record;
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
