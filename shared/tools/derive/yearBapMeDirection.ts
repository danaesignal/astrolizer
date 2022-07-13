export function yearBapMeDirection(gender: string, count: string): string {
  let direction: string;

  switch (count) {
    case "0":
      direction = "c";
      break;
    case "1":
      direction = "e";
      break;
    case "2":
      direction = gender === "male" ? "se" : "ne";
      break;
    case "3":
      direction = gender === "male" ? "s" : "n";
      break;
    case "4":
      direction = gender === "male" ? "sw" : "nw";
      break;
    case "5":
      direction = gender === "male" ? "w" : "w";
      break;
    case "6":
      direction = gender === "male" ? "nw" : "sw";
      break;
    case "7":
      direction = gender === "male" ? "n" : "s";
      break;
    case "8":
      direction = gender === "male" ? "ne" : "se";
      break;

    default:
      direction = "error";
      break;
  }

  return direction;
}
