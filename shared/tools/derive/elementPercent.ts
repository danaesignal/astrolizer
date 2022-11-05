import * as data from "../../data";
import {
  cache,
  yearLifeForce,
  yearBody,
  yearPower,
  yearLuck,
  monthLifeForce,
  monthBody,
  monthPower,
  monthLuck,
  dayLifeForce,
  dayBody,
  dayPower,
  dayLuck,
  hourLifeForce,
  hourBody,
  hourPower,
  hourLuck,
} from ".";

export async function elementPercent(
  key: string[],
  element: string,
  cache: cache
) {
  const dob = key[1];
  const elements = [
    await yearLifeForce(dob, cache),
    await yearBody(dob, cache),
    await yearPower(dob, cache),
    await yearLuck(dob, cache),
    await monthLifeForce(dob, cache),
    await monthBody(dob, cache),
    await monthPower(dob, cache),
    await monthLuck(dob, cache),
    await dayLifeForce(dob, cache),
    await dayBody(dob, cache),
    await dayPower(dob, cache),
    await dayLuck(dob, cache),
    await hourLifeForce(key, cache),
    await hourBody(key, cache),
    await hourPower(key, cache),
    await hourLuck(key, cache),
  ];
  const found = [];

  for (let current of elements) {
    if (current === element) found.push(current);
  }

  return `${(found.length / elements.length) * 100}%`;
}
