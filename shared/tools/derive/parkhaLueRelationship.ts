import * as data from "../../data";
import { cache, yearBapPar, yearLue } from ".";

export function parkhaLueRelationship(
  dateOfBirth: string,
  cache: cache
): string {
  const lue = yearLue(dateOfBirth, cache);
  const bapPar = yearBapPar(dateOfBirth, cache);
  const recordOne = cache[`${bapPar}_birthParkha_kye-Parkha`]
    ? cache[`${bapPar}_birthParkha_kye-Parkha`]
    : data.birthParkha.search({ query: bapPar, range: "kye-Parkha" });

  if (recordOne) {
    cache[`${bapPar}_birthParkha_kye-Parkha`] = recordOne;
    const element = recordOne.element;

    const recordTwo = cache[`${lue + element}_relationships_elemCombo`]
      ? cache[`${lue + element}_relationships_elemCombo`]
      : data.relationships.search({
          query: lue + element,
          range: "elemCombo",
        });
    if (recordTwo) {
      cache[`${lue + element}_relationships_elemCombo`] = recordTwo;
      return `${element} ${recordTwo.elemDeu}`;
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
