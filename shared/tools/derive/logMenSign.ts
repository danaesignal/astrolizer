import * as data from "../../data";
import { cache, yearWang } from ".";

export async function logMenSign(
  age: string,
  gender: string,
  dateOfBirth: string,
  cache: cache
): Promise<string> {
  const clientWang = await yearWang(dateOfBirth, cache);
  const keyOne = (parseInt(age) % 10).toString() + gender[0].toUpperCase();
  const keyTwo = (parseInt(age) % 12).toString() + gender[0].toUpperCase();

  const recordOne = cache[`${keyOne}_logMen_logMen`]
    ? cache[`${keyOne}_logMen_logMen`]
    : await data.logMen.search({ query: keyOne, range: "logMen" });
  const recordTwo = cache[`${keyTwo}_logMen_logMen`]
    ? cache[`${keyTwo}_logMen_logMen`]
    : await data.logMen.search({ query: keyTwo, range: "logMen" });

  if (recordOne && recordTwo) {
    cache[`${keyOne}_logMen_logMen`] = recordOne;
    cache[`${keyTwo}_logMen_logMen`] = recordTwo;
    const resultOne = recordOne[`lM${clientWang}`];
    const resultTwo = recordTwo.lMSign;

    return `${resultOne} ${resultTwo}`;
  } else {
    throw new Error(
      "Lookup failed. This should not happen, please contact support."
    );
  }
}
