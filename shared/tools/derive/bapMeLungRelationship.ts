import * as data from "../../data";
import { cache, bapMeElement, yearLung } from ".";

export async function bapMeLungRelationship(
  dateOfBirth: string,
  age: string,
  gender: string,
  cache: cache
): Promise<string> {
  const yearElement = await yearLung(dateOfBirth, cache);
  const bapMeEle = bapMeElement(dateOfBirth, age, gender, cache);

  const record = cache[`${yearElement + bapMeEle}_relationships_combined`]
    ? cache[`${yearElement + bapMeEle}_relationships_combined`]
    : await data.relationships.search({
        query: yearElement + bapMeEle,
        range: "elemCombo",
      });

  if (record) {
    cache[`${yearElement + bapMeEle}_relationships_combined`] = record;
    return record.elemDeu;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
