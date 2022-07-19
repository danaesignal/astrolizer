import * as data from "../../data";
import { cache, bapMeElement, yearSrog } from ".";

export function bapMeSrogRelationship(
  dateOfBirth: string,
  age: string,
  gender: string,
  cache: cache
): string {
  const yearElement = yearSrog(dateOfBirth, cache);
  const bapMeEle = bapMeElement(dateOfBirth, age, gender, cache);

  const record = cache[`${yearElement + bapMeEle}_relationships_combined`]
    ? cache[`${yearElement + bapMeEle}_relationships_combined`]
    : data.relationships.search({
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
