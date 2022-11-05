import * as data from "../../../db/definitions";
import { cache } from ".";
import { logMenSign } from ".";

export async function logMenLung(
  age: string,
  gender: string,
  dateOfBirth: string,
  cache: cache
): Promise<string> {
  const lungKey = await logMenSign(age, gender, dateOfBirth, cache);

  if (lungKey) {
    const record = cache[`${lungKey}_yearsElements_combined_-7`]
      ? cache[`${lungKey}_yearsElements_combined_-7`]
      : await data.yearsElements.offsetSearch(
          { query: lungKey, range: "combined" },
          -7
        );
    if (record) {
      cache[`${lungKey}_yearsElements_combined_-7`] = record;
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
