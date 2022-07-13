export function hourAnimal(key: string): string {
  let tob = parseInt(key);
  let animal: string;

  switch (true) {
    case tob < 59:
      animal = "Mouse";

    case tob < 259:
      animal = "Cow";

    case tob < 459:
      animal = "Tiger";

    case tob < 659:
      animal = "Rabbit";

    case tob < 859:
      animal = "Dragon";

    case tob < 1059:
      animal = "Snake";

    case tob < 1259:
      animal = "Horse";

    case tob < 1459:
      animal = "Sheep";

    case tob < 1659:
      animal = "Monkey";

    case tob < 1859:
      animal = "Bird";

    case tob < 2059:
      animal = "Dog";

    case tob < 2259:
      animal = "Pig";

    case tob < 2359:
      animal = "Mouse";

    default:
      animal = "";
  }
  return animal;
}
