import * as data from "../../data";
import { cache } from ".";
import { logMenSign } from ".";

export async function logMenWang(
  age: string,
  gender: string,
  dateOfBirth: string,
  cache: cache
): Promise<string> {
  const wangKey = await logMenSign(age, gender, dateOfBirth, cache);

  if (wangKey) {
    const record = cache[`${wangKey}_yearsElements_combined_7`]
      ? cache[`${wangKey}_yearsElements_combined_7`]
      : await data.yearsElements.offsetSearch(
          { query: wangKey, range: "combined" },
          7
        );
    if (record) {
      cache[`${wangKey}_yearsElements_combined_7`] = record;
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
