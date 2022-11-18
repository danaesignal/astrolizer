import * as data from "../../../db/definitions";
import { cache, logMenLung, yearLung } from ".";

export async function lmLungRelationship(
  age: string,
  gender: string,
  dateOfBirth: string,
  cache: cache
): Promise<string> {
  const keyOne = await logMenLung(age, gender, dateOfBirth, cache);
  const recordOne = cache[`${keyOne}_yearsElements_combined`]
    ? cache[`${keyOne}_yearsElements_combined`]
    : await data.yearsElements.search({
        query: keyOne,
        range: "combined",
      });

  if (recordOne) {
    const keyTwo = await yearLung(dateOfBirth, cache);
    const resultOne = recordOne.lung;

    const recordTwo = cache[`${keyTwo + resultOne}_relationships_elemCombo`]
      ? cache[`${keyTwo + resultOne}_relationships_elemCombo`]
      : await data.relationships.search({
          query: `${keyTwo + resultOne}`,
          range: `elemCombo`,
        });

    if (recordTwo) {
      cache[`${keyTwo + resultOne}_relationships_elemCombo`] = recordTwo;
      return `${resultOne} ${recordTwo.elemDeu}`;
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
