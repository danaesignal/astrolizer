import * as data from "../../data";
import { cache } from ".";
import { logMenSign } from ".";

export async function logMenSrog(
  age: string,
  gender: string,
  dateOfBirth: string,
  cache: cache
): Promise<string> {
  const srogKey = await logMenSign(age, gender, dateOfBirth, cache);

  if (srogKey) {
    const record = cache[`${srogKey}_yearsElements_combined_4`]
      ? cache[`${srogKey}_yearsElements_combined_4`]
      : await data.yearsElements.offsetSearch(
          { query: srogKey, range: "combined" },
          4
        );
    if (record) {
      cache[`${srogKey}_yearsElements_combined_4`] = record;
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
