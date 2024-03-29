import * as data from "../../../db/definitions";
import { cache, year, yearWang } from ".";

export async function dargudSrog(
  dateOfBirth: string,
  cache: cache
): Promise<string> {
  const yearCombined = await year(dateOfBirth, cache);
  const animal = await yearCombined.split(" ")[1];
  const element = await (await yearWang(dateOfBirth, cache)).toLowerCase();

  const recordOne = cache[`${animal}_dargudFunctions_dargudAnimals`]
    ? cache[`${animal}_dargudFunctions_dargudAnimals`]
    : await data.dargudFunctions.search({
        query: animal,
        range: "dargudAnimals",
      });

  const recordTwo = cache[`${yearCombined}_yearsElements_combined`]
    ? cache[`${yearCombined}_yearsElements_combined`]
    : await data.yearsElements.search({
        query: yearCombined,
        range: "combined",
      });

  if (recordOne && recordTwo) {
    cache[`${animal}_dargudFunctions_dargudAnimals`] = recordOne;
    cache[`${yearCombined}_yearsElements_combined`] = recordTwo;
    const count = recordOne[element];

    const countRecord = cache[`${count}_dargudFunctions_dargudCount`]
      ? cache[`${count}_dargudFunctions_dargudCount`]
      : await data.dargudFunctions.search({
          query: count,
          range: "dargudCount",
        });

    if (countRecord) {
      cache[`${count}_dargudFunctions_dargudCount`] = countRecord;

      return `${countRecord.dargud} ${countRecord.dargudDrel}`;
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
