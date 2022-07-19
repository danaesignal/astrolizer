import * as data from "../../data";
import { cache, yearSrog } from ".";

export function parkhaSrogRelationship(
  dateOfBirth: string,
  cache: cache
): string {
  const srog = yearSrog(dateOfBirth, cache);
  const recordOne = cache[`${srog}_birthParkha_kye-Parkha`]
    ? cache[`${srog}_birthParkha_kye-Parkha`]
    : data.birthParkha.search({ query: srog, range: "kye-Parkha" });

  if (recordOne) {
    cache[`${srog}_birthParkha_kye-Parkha`] = recordOne;
    const element = recordOne.element;

    const recordTwo = cache[`${srog + element}_relationships_elemCombo`]
      ? cache[`${srog + element}_relationships_elemCombo`]
      : data.relationships.search({
          query: srog + element,
          range: "elemCombo",
        });
    if (recordTwo) {
      cache[`${srog + element}_relationships_elemCombo`] = recordTwo;
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
