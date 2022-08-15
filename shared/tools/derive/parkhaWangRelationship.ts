import * as data from "../../data";
import { cache, yearBapPar, yearWang } from ".";

export function parkhaWangRelationship(
  dateOfBirth: string,
  cache: cache
): string {
  const wang = yearWang(dateOfBirth, cache);
  const bapPar = yearBapPar(dateOfBirth, cache);
  const recordOne = cache[`${bapPar}_birthParkha_kye-Parkha`]
    ? cache[`${bapPar}_birthParkha_kye-Parkha`]
    : data.birthParkha.search({ query: bapPar, range: "kye-Parkha" });

  if (recordOne) {
    cache[`${bapPar}_birthParkha_kye-Parkha`] = recordOne;
    const element = recordOne.element;

    const recordTwo = cache[`${wang + element}_relationships_elemCombo`]
      ? cache[`${wang + element}_relationships_elemCombo`]
      : data.relationships.search({
          query: wang + element,
          range: "elemCombo",
        });
    if (recordTwo) {
      cache[`${wang + element}_relationships_elemCombo`] = recordTwo;
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
