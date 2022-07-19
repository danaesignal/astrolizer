import * as data from "../../data";
import { cache, yearLung } from ".";

export function parkhaLungRelationship(
  dateOfBirth: string,
  cache: cache
): string {
  const lung = yearLung(dateOfBirth, cache);
  const recordOne = cache[`${lung}_birthParkha_kye-Parkha`]
    ? cache[`${lung}_birthParkha_kye-Parkha`]
    : data.birthParkha.search({ query: lung, range: "kye-Parkha" });

  if (recordOne) {
    cache[`${lung}_birthParkha_kye-Parkha`] = recordOne;
    const element = recordOne.element;

    const recordTwo = cache[`${lung + element}_relationships_elemCombo`]
      ? cache[`${lung + element}_relationships_elemCombo`]
      : data.relationships.search({
          query: lung + element,
          range: "elemCombo",
        });
    if (recordTwo) {
      cache[`${lung + element}_relationships_elemCombo`] = recordTwo;
      return `${element} ${recordOne.elemDeu}`;
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
