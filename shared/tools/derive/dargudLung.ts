import * as data from "../../data";
import { cache, hour } from ".";

export function dargudLung(key: string[], cache: cache): string {
  const hourCombined = hour(key, cache);
  const animal = hourCombined.split(" ")[1];

  const recordOne = cache[`${animal}_dargudFunctions_dargudAnimals`]
    ? cache[`${animal}_dargudFunctions_dargudAnimals`]
    : data.dargudFunctions.search({ query: animal, range: "dargudAnimals" });

  const recordTwo = cache[`${hourCombined}_yearsElements_combined`]
    ? cache[`${hourCombined}_yearsElements_combined`]
    : data.yearsElements.search({
        query: hourCombined,
        range: "combined",
      });

  if (recordOne && recordTwo) {
    cache[`${animal}_dargudFunctions_dargudAnimals`] = recordOne;
    cache[`${hourCombined}_yearsElements_combined`] = recordTwo;
    const lung = recordTwo.lung.toLocaleLowerCase();
    const count = recordOne[lung];

    const countRecord = cache[`${count}_dargudFunctions_dargudCount`]
      ? cache[`${count}_dargudFunctions_dargudCount`]
      : data.dargudFunctions.search({ query: count, range: "dargudCount" });

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
