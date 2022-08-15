import * as data from "../../data";
import { cache, day } from ".";

export function dargudWang(dateOfBirth: string, cache: cache): string {
  const dayCombined = day(dateOfBirth, cache);
  const animal = dayCombined.split(" ")[1];

  const recordOne = cache[`${animal}_dargudFunctions_dargudAnimals`]
    ? cache[`${animal}_dargudFunctions_dargudAnimals`]
    : data.dargudFunctions.search({ query: animal, range: "dargudAnimals" });

  const recordTwo = cache[`${dayCombined}_yearsElements_combined`]
    ? cache[`${dayCombined}_yearsElements_combined`]
    : data.yearsElements.search({
        query: dayCombined,
        range: "combined",
      });

  if (recordOne && recordTwo) {
    cache[`${animal}_dargudFunctions_dargudAnimals`] = recordOne;
    cache[`${dayCombined}_yearsElements_combined`] = recordTwo;
    const wang = recordTwo.wang.toLocaleLowerCase();
    const count = recordOne[wang];

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
