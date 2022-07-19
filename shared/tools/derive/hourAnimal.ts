export function hourAnimal(key: string): string {
  let tob = parseInt(key);
  let animal: string;

  switch (true) {
    case tob < 59:
      animal = "Mouse";
      break;
    case tob < 259:
      animal = "Cow";
      break;
    case tob < 459:
      animal = "Tiger";
      break;
    case tob < 659:
      animal = "Rabbit";
      break;
    case tob < 859:
      animal = "Dragon";
      break;
    case tob < 1059:
      animal = "Snake";
      break;
    case tob < 1259:
      animal = "Horse";
      break;
    case tob < 1459:
      animal = "Sheep";
      break;
    case tob < 1659:
      animal = "Monkey";
      break;
    case tob < 1859:
      animal = "Bird";
      break;
    case tob < 2059:
      animal = "Dog";
      break;
    case tob < 2259:
      animal = "Pig";
      break;
    case tob < 2359:
      animal = "Mouse";
      break;
    default:
      animal = "";
  }
  return animal;
}
