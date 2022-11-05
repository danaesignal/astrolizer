import * as data from "../../../db/definitions";
import { cache } from ".";
import { logMenSign } from ".";

export async function logMenLue(
  age: string,
  gender: string,
  dateOfBirth: string,
  cache: cache
): Promise<string> {
  const lueKey = await logMenSign(age, gender, dateOfBirth, cache);

  if (lueKey) {
    const record = cache[`${lueKey}_yearsElements_combined_-4`]
      ? cache[`${lueKey}_yearsElements_combined_-4`]
      : await data.yearsElements.offsetSearch(
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
