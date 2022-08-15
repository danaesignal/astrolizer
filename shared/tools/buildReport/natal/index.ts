import { time } from "console";
import * as data from "../../../data";
import { yearsElements } from "../../../data";
import * as derive from "../../derive";

export type NatalRequest = {
  dateOfBirth: number;
  timeOfBirth: number;
  motherYearOfBirth: number;
};
export class ObsApp {
  private input;

  constructor(request: NatalRequest) {
    this.input = {
      dateOfBirth: request.dateOfBirth.toString(),
      timeOfBirth: request.timeOfBirth.toString(),
      motherYearOfBirth: request.motherYearOfBirth.toString(),
    };
  }

  generateReport() {
    const cache: derive.cache = {};
    const report: { [key: string]: string }[][] = [];
    const sectionOne: { [key: string]: string }[] = [];
    const sectionTwo: { [key: string]: string }[] = [];
    const sectionThree: { [key: string]: string }[] = [];
    const sectionFour: { [key: string]: string }[] = [];
    const sectionFive: { [key: string]: string }[] = [];
    const { dateOfBirth, timeOfBirth, motherYearOfBirth } = this.input;
    const birthYear = dateOfBirth.slice(0, 4);
    const count = (
      parseInt(birthYear) - parseInt(motherYearOfBirth)
    ).toString();

    sectionOne.push(
      { label: "Date of Birth", content: dateOfBirth },
      { label: "Time of Birth", content: timeOfBirth },
      {
        label: "Mother's Year of Birth",
        content: motherYearOfBirth,
      },
      { label: "Birth Year", content: birthYear },
      { label: "Count", content: count },
      { label: "Count", content: count },
      { label: "Year", content: derive.year(dateOfBirth, cache) },
      { label: "Month", content: derive.month(dateOfBirth, cache) },
      { label: "Day", content: derive.day(dateOfBirth, cache) },
      {
        label: "Hour",
        content: derive.hour([timeOfBirth, dateOfBirth], cache),
      }
    );

    sectionTwo.push(
      {
        label: "Lunar Mansion",
        content: derive.lunarMansion(dateOfBirth, cache),
      },
      {
        label: "Lunar Mansion Element",
        content: derive.lunarMansionElement(dateOfBirth, cache),
      },
      {
        label: "Lunar Day Type",
        content: derive.lunarDayType(dateOfBirth, cache),
      },
      { label: "Weekday", content: derive.weekday(dateOfBirth, cache) },
      {
        label: "Weekday Element",
        content: derive.weekdayElement(dateOfBirth, cache),
      },
      {
        label: "Weekday Combination",
        content: derive.weekdayCombination(dateOfBirth, cache),
      },
      { label: "Conjunction", content: derive.conjunction(dateOfBirth, cache) },
      {
        label: "Conjunction Text",
        content: derive.conjunctionText(dateOfBirth, cache),
      },
      { label: "Yoga", content: derive.yoga(dateOfBirth, cache) },
      { label: "Yoga Text", content: derive.yogaText(dateOfBirth, cache) }
    );

    sectionThree.push(
      { label: "Year Sign", content: derive.year(dateOfBirth, cache) },
      { label: "Month Sign", content: derive.month(dateOfBirth, cache) },
      { label: "Day Sign", content: derive.day(dateOfBirth, cache) },
      {
        label: "Hour Sign",
        content: derive.hour([timeOfBirth, dateOfBirth], cache),
      },
      { label: "Year Gender", content: derive.yearGender(dateOfBirth, cache) },
      {
        label: "Month Gender",
        content: derive.monthGender(dateOfBirth, cache),
      },
      { label: "Day Gender", content: derive.dayGender(dateOfBirth, cache) },
      {
        label: "Hour Gender",
        content: derive.hourGender([timeOfBirth, dateOfBirth], cache),
      },
      {
        label: "Year Life-Force",
        content: derive.yearLifeForce(dateOfBirth, cache),
      },
      {
        label: "Month Life-Force",
        content: derive.monthLifeForce(dateOfBirth, cache),
      },
      {
        label: "Day Life-Force",
        content: derive.dayLifeForce(dateOfBirth, cache),
      },
      {
        label: "Hour Life-Force",
        content: derive.hourLifeForce([timeOfBirth, dateOfBirth], cache),
      },
      { label: "Year Body", content: derive.yearBody(dateOfBirth, cache) },
      { label: "Month Body", content: derive.monthBody(dateOfBirth, cache) },
      { label: "Day Body", content: derive.dayBody(dateOfBirth, cache) },
      {
        label: "Hour Body",
        content: derive.hourBody([timeOfBirth, dateOfBirth], cache),
      },
      { label: "Year Power", content: derive.yearPower(dateOfBirth, cache) },
      { label: "Month Power", content: derive.monthPower(dateOfBirth, cache) },
      { label: "Day Power", content: derive.dayPower(dateOfBirth, cache) },
      {
        label: "Hour Power",
        content: derive.hourPower([timeOfBirth, dateOfBirth], cache),
      },
      { label: "Year Luck", content: derive.yearLuck(dateOfBirth, cache) },
      { label: "Month Luck", content: derive.monthLuck(dateOfBirth, cache) },
      { label: "Day Luck", content: derive.dayLuck(dateOfBirth, cache) },
      {
        label: "Hour Luck",
        content: derive.hourLuck([timeOfBirth, dateOfBirth], cache),
      }
    );

    sectionFour.push(
      {
        label: "Birth Year Mewa",
        content: derive.birthYearMewa(dateOfBirth, cache),
      },
      {
        label: "Birth Day Mewa",
        content: derive.birthDayMewa(dateOfBirth, cache),
      },
      { label: "Kye-Parkha", content: derive.kyeParkha(count, cache) },
      {
        label: "Birth-Day Parkha",
        content: derive.birthDayParkha(dateOfBirth, cache),
      },
      {
        label: "Wood Count (Percent)",
        content: derive.elementCount([dateOfBirth, timeOfBirth], "Wood", cache),
      },
      {
        label: "Fire Count (Percent)",
        content: derive.elementCount([dateOfBirth, timeOfBirth], "Fire", cache),
      },
      {
        label: "Earth Count (Percent)",
        content: derive.elementCount(
          [dateOfBirth, timeOfBirth],
          "Earth",
          cache
        ),
      },
      {
        label: "Metal Count (Percent)",
        content: derive.elementCount(
          [dateOfBirth, timeOfBirth],
          "Metal",
          cache
        ),
      },
      {
        label: "Water Count (Percent)",
        content: derive.elementCount(
          [dateOfBirth, timeOfBirth],
          "Water",
          cache
        ),
      }
    );

    sectionFive.push(
      { label: "Best Day", content: derive.bestDay(dateOfBirth, cache) },
      { label: "Good Day", content: derive.goodDay(dateOfBirth, cache) },
      { label: "Worst Day", content: derive.worstDay(dateOfBirth, cache) },
      { label: "Basis", content: derive.basis(dateOfBirth, cache) },
      { label: "Power", content: derive.power(dateOfBirth, cache) },
      { label: "Success", content: derive.success(dateOfBirth, cache) },
      { label: "Obstacle", content: derive.obstacle(dateOfBirth, cache) },
      { label: "Disturbance", content: derive.disturbance(dateOfBirth, cache) },
      { label: "Enemy", content: derive.enemy(dateOfBirth, cache) },
      { label: "Lue Star", content: derive.lueStar(dateOfBirth, cache) },
      { label: "Srog Star", content: derive.srogStar(dateOfBirth, cache) },
      { label: "Wang Star", content: derive.wangStar(dateOfBirth, cache) },
      { label: "Kek Star", content: derive.kekStar(dateOfBirth, cache) },
      { label: "Demon Star", content: derive.demonStar(dateOfBirth, cache) },
      {
        label: "Destruction Star",
        content: derive.destructionStar(dateOfBirth, cache),
      }
    );

    report.push(sectionOne);
    report.push(sectionTwo);
    report.push(sectionThree);
    report.push(sectionFour);
    report.push(sectionFive);

    return report;
  }
}
