import * as data from "../../data";
import { cache } from ".";
import { hourAnimal } from "./hourAnimal";

export function hour(key: string[], cache: cache) {
  const animal: string = hourAnimal(key[0]);
  const dayRecord = cache[`${key[1]}_day`]
    ? cache[`${key[1]}_day`]
    : data.dates.search({ query: key[1], range: "dayDate" });

  const record = cache[`${animal}_${hour.name}`]
    ? cache[`${animal}_${hour.name}`]
    : data.signElementArray.search({ query: animal, range: "animal" });

  if (record && dayRecord && animal) {
    cache[`${animal}_${hour.name}`] = record;
    cache[`${key[1]}_day`] = dayRecord;
    return animal + record[dayRecord.dayElement];
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
