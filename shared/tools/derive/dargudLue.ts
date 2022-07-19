import * as data from "../../data";
import { cache, month } from ".";

export function dargudLue(dateOfBirth: string, cache: cache): string {
  const monthData = month(dateOfBirth, cache).split(" ");
  const element = monthData[0];
  const animal = monthData[1];

  const record = cache[`${animal}_dargudFunctions_dargudAnimals`]
    ? cache[`${animal}_dargudFunctions_dargudAnimals`]
    : data.dargudFunctions.search({ query: animal, range: "dargudAnimals" });

  if (record) {
    cache[`${animal}_dargudFunctions_dargudAnimals`] = record;
    const count = record[element];

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
