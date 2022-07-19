import * as data from "../../data";
import { cache } from ".";
import { hourAnimal } from "./hourAnimal";

export function hour(key: string[], cache: cache) {
  const animal: string = hourAnimal(key[0]);
  const dayRecord = cache[`${key[1]}_dates_dayDate`]
    ? cache[`${key[1]}_dates_dayDate`]
    : data.dates.search({ query: key[1], range: "dayDate" });

  const record = cache[`${animal}_signElementArray_animal`]
    ? cache[`${animal}_signElementArray_animal`]
    : data.signElementArray.search({ query: animal, range: "animal" });

  if (record && dayRecord && animal) {
    cache[`${animal}_signElementArray_animal`] = record;
    cache[`${key[1]}_dates_dayDates`] = dayRecord;
    return `${record[dayRecord.dayElement.toLowerCase()]} ${animal}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
