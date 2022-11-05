import * as data from "../../data";
import { cache, bapMeElement, yearLue } from ".";

export async function bapMeLueRelationship(
  dateOfBirth: string,
  age: string,
  gender: string,
  cache: cache
): Promise<string> {
  const yearElement = await yearLue(dateOfBirth, cache);
  const bapMeEle = await bapMeElement(dateOfBirth, age, gender, cache);

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
