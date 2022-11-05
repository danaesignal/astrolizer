import * as data from "../../../db/definitions";
import { cache, month } from ".";

export async function dargudLue(
  dateOfBirth: string,
  cache: cache
): Promise<string> {
  const monthCombined = await month(dateOfBirth, cache);
  const animal = monthCombined.split(" ")[1];

  const recordOne = cache[`${animal}_dargudFunctions_dargudAnimals`]
    ? cache[`${animal}_dargudFunctions_dargudAnimals`]
    : await data.dargudFunctions.search({
        query: animal,
        range: "dargudAnimals",
      });

  const recordTwo = cache[`${monthCombined}_yearsElements_combined`]
    ? cache[`${monthCombined}_yearsElements_combined`]
    : await data.yearsElements.search({
        query: monthCombined,
        range: "combined",
      });

  if (recordOne && recordTwo) {
    cache[`${animal}_dargudFunctions_dargudAnimals`] = recordOne;
    cache[`${monthCombined}_yearsElements_combined`] = recordTwo;
    const lue = recordTwo.lue.toLocaleLowerCase();
    const count = recordOne[lue];

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
