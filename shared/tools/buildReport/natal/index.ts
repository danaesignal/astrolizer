import * as derive from "../../derive";

export type NatalRequest = {
  dateOfBirth: number;
  timeOfBirth: number;
  motherYearOfBirth: number;
};
export class Natal {
  private input;

  constructor(request: NatalRequest) {
    this.input = {
      dateOfBirth: request.dateOfBirth.toString(),
      timeOfBirth: request.timeOfBirth.toString(),
      motherYearOfBirth: request.motherYearOfBirth.toString(),
    };
  }

  async generateReport() {
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
      parseInt(birthYear) -
      parseInt(motherYearOfBirth) +
      1
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
      { label: "Year", content: await derive.year(dateOfBirth, cache) },
      { label: "Month", content: await derive.monthCount(dateOfBirth, cache) },
      { label: "Day", content: await derive.dayCount(dateOfBirth, cache) },
      {
        label: "Hour",
        content: await derive.hour([timeOfBirth, dateOfBirth], cache),
      }
    );

    sectionTwo.push(
      {
        label: "Lunar Mansion",
        content: await derive.lunarMansion(dateOfBirth, cache),
      },
      {
        label: "Lunar Mansion Element",
        content: await derive.lunarMansionElement(dateOfBirth, cache),
      },
      {
        label: "Lunar Day Type",
        content: await derive.lunarDayType(dateOfBirth, cache),
      },
      { label: "Weekday", content: await derive.weekday(dateOfBirth, cache) },
      {
        label: "Weekday Element",
        content: await derive.weekdayElement(dateOfBirth, cache),
      },
      {
        label: "Weekday Combination",
        content: await derive.weekdayCombination(dateOfBirth, cache),
      },
      {
        label: "Conjunction",
        content: await derive.conjunction(dateOfBirth, cache),
      },
      {
        label: "Conjunction Text",
        content: await derive.conjunctionText(dateOfBirth, cache),
      },
      { label: "Yoga", content: await derive.yoga(dateOfBirth, cache) },
      {
        label: "Yoga Text",
        content: await derive.yogaNatalMeaning(dateOfBirth, cache),
      }
    );

    sectionThree.push(
      { label: "Year Sign", content: await derive.year(dateOfBirth, cache) },
      {
        label: "Year Gender",
        content: await derive.yearGender(dateOfBirth, cache),
      },
      {
        label: "Year Life-Force",
        content: await derive.yearLifeForce(dateOfBirth, cache),
      },
      {
        label: "Year Body",
        content: await derive.yearBody(dateOfBirth, cache),
      },
      {
        label: "Year Power",
        content: await derive.yearPower(dateOfBirth, cache),
      },
      {
        label: "Year Luck",
        content: await derive.yearLuck(dateOfBirth, cache),
      },
      { label: "Month Sign", content: await derive.month(dateOfBirth, cache) },
      {
        label: "Month Gender",
        content: await derive.monthGender(dateOfBirth, cache),
      },
      {
        label: "Month Life-Force",
        content: await derive.monthLifeForce(dateOfBirth, cache),
      },
      {
        label: "Month Body",
        content: await derive.monthBody(dateOfBirth, cache),
      },
      {
        label: "Month Power",
        content: await derive.monthPower(dateOfBirth, cache),
      },
      {
        label: "Month Luck",
        content: await derive.monthLuck(dateOfBirth, cache),
      },
      { label: "Day Sign", content: await derive.day(dateOfBirth, cache) },
      {
        label: "Day Gender",
        content: await derive.dayGender(dateOfBirth, cache),
      },
      {
        label: "Day Life-Force",
        content: await derive.dayLifeForce(dateOfBirth, cache),
      },
      { label: "Day Body", content: await derive.dayBody(dateOfBirth, cache) },
      {
        label: "Day Power",
        content: await derive.dayPower(dateOfBirth, cache),
      },
      { label: "Day Luck", content: await derive.dayLuck(dateOfBirth, cache) },
      {
        label: "Hour Sign",
        content: await derive.hour([timeOfBirth, dateOfBirth], cache),
      },
      {
        label: "Hour Gender",
        content: await derive.hourGender([timeOfBirth, dateOfBirth], cache),
      },
      {
        label: "Hour Life-Force",
        content: await derive.hourLifeForce([timeOfBirth, dateOfBirth], cache),
      },
      {
        label: "Hour Body",
        content: await derive.hourBody([timeOfBirth, dateOfBirth], cache),
      },
      {
        label: "Hour Power",
        content: await derive.hourPower([timeOfBirth, dateOfBirth], cache),
      },
      {
        label: "Hour Luck",
        content: await derive.hourLuck([timeOfBirth, dateOfBirth], cache),
      }
    );

    sectionFour.push(
      {
        label: "Birth Year Mewa",
        content: await derive.yearMewa(dateOfBirth, cache),
      },
      {
        label: "Birth Day Mewa",
        content: await derive.dayMewa(dateOfBirth, cache),
      },
      { label: "Kye-Parkha", content: await derive.kyeParkha(count, cache) },
      {
        label: "Birth-Day Parkha",
        content: await derive.dayParkha(dateOfBirth, cache),
      },
      {
        label: "Wood Count",
        content: await derive.elementCount(
          [timeOfBirth, dateOfBirth],
          "Wood",
          cache
        ),
      },
      {
        label: "Wood Percent",
        content: await derive.elementPercent(
          [timeOfBirth, dateOfBirth],
          "Wood",
          cache
        ),
      },
      {
        label: "Fire Count",
        content: await derive.elementCount(
          [timeOfBirth, dateOfBirth],
          "Fire",
          cache
        ),
      },
      {
        label: "Fire Percent",
        content: await derive.elementPercent(
          [timeOfBirth, dateOfBirth],
          "Fire",
          cache
        ),
      },
      {
        label: "Earth Count",
        content: await derive.elementCount(
          [timeOfBirth, dateOfBirth],
          "Earth",
          cache
        ),
      },
      {
        label: "Earth Percent",
        content: await derive.elementPercent(
          [timeOfBirth, dateOfBirth],
          "Earth",
          cache
        ),
      },
      {
        label: "Metal Count",
        content: await derive.elementCount(
          [timeOfBirth, dateOfBirth],
          "Metal",
          cache
        ),
      },
      {
        label: "Metal Percent",
        content: await derive.elementPercent(
          [timeOfBirth, dateOfBirth],
          "Metal",
          cache
        ),
      },
      {
        label: "Water Count",
        content: await derive.elementCount(
          [timeOfBirth, dateOfBirth],
          "Water",
          cache
        ),
      },
      {
        label: "Water Percent",
        content: await derive.elementPercent(
          [timeOfBirth, dateOfBirth],
          "Water",
          cache
        ),
      }
    );

    sectionFive.push(
      { label: "Best Day", content: await derive.bestDay(dateOfBirth, cache) },
      { label: "Good Day", content: await derive.goodDay(dateOfBirth, cache) },
      {
        label: "Worst Day",
        content: await derive.worstDay(dateOfBirth, cache),
      },
      { label: "Basis", content: await derive.basis(dateOfBirth, cache) },
      { label: "Power", content: await derive.power(dateOfBirth, cache) },
      { label: "Success", content: await derive.success(dateOfBirth, cache) },
      { label: "Obstacle", content: await derive.obstacle(dateOfBirth, cache) },
      {
        label: "Disturbance",
        content: await derive.disturbance(dateOfBirth, cache),
      },
      { label: "Enemy", content: await derive.enemy(dateOfBirth, cache) },
      { label: "Lue Star", content: await derive.lueStar(dateOfBirth, cache) },
      {
        label: "Srog Star",
        content: await derive.srogStar(dateOfBirth, cache),
      },
      {
        label: "Wang Star",
        content: await derive.wangStar(dateOfBirth, cache),
      },
      { label: "Kek Star", content: await derive.kekStar(dateOfBirth, cache) },
      {
        label: "Demon Star",
        content: await derive.demonStar(dateOfBirth, cache),
      },
      {
        label: "Destruction Star",
        content: await derive.destructionStar(dateOfBirth, cache),
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
