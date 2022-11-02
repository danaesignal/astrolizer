import * as derive from "../../derive";

export type OperatorDayCalcRequest = {
  dateOfBirth: number;
  timeOfBirth: number;
  motherYearOfBirth: number;
  calcDate: number;
  calcTime: number;
};
export class OperatorDayCalc {
  private input;

  constructor(request: OperatorDayCalcRequest) {
    this.input = {
      dateOfBirth: request.dateOfBirth.toString(),
      timeOfBirth: request.timeOfBirth.toString(),
      motherYearOfBirth: request.motherYearOfBirth.toString(),
      calcDate: request.calcDate.toString(),
      calcTime: request.calcTime.toString(),
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
    const sectionSix: { [key: string]: string }[] = [];
    const sectionSeven: { [key: string]: string }[] = [];
    const sectionEight: { [key: string]: string }[] = [];
    const sectionNine: { [key: string]: string }[] = [];
    const sectionTen: { [key: string]: string }[] = [];
    const { dateOfBirth, timeOfBirth, motherYearOfBirth, calcDate, calcTime } =
      this.input;
    const birthYear = dateOfBirth.slice(0, 4);
    const count = (
      parseInt(birthYear) -
      parseInt(motherYearOfBirth) +
      1
    ).toString();

    sectionOne.push(
      { label: "Calc Date", content: calcDate },
      { label: "Calc Hour", content: calcTime }
    );

    sectionTwo.push(
      {
        label: "Lunar Mansion",
        content: derive.lunarMansion(calcDate, cache),
      },
      {
        label: "Lunar Mansion Interpretation",
        content: derive.lunarMansionInterp(calcDate, cache),
      },
      {
        label: "Lunar Date",
        content: derive.lunarDate(calcDate, cache),
      },
      { label: "Conjunction", content: derive.conjunction(calcDate, cache) },
      {
        label: "Conjunction Text",
        content: derive.conjunctionText(calcDate, cache),
      },
      {
        label: "Weekday",
        content: derive.weekday(calcDate, cache),
      },
      { label: "Yoga", content: derive.yoga(calcDate, cache) },
      {
        label: "Yoga Daily Meaning",
        content: derive.yogaDailyMeaning(calcDate, cache),
      },
      {
        label: "Lunar Day Type",
        content: derive.lunarDayType(calcDate, cache),
      },
      {
        label: "Weekday Combination",
        content: derive.weekdayCombination(calcDate, cache),
      },
      {
        label: "Lunar Day Character",
        content: derive.lunarDayCharacter(calcDate, cache),
      },
      {
        label: "Lunar Day Travel",
        content: derive.lunarDayTravel(calcDate, cache),
      }
    );

    sectionThree.push(
      { label: "Client Year Sign", content: derive.year(dateOfBirth, cache) },
      {
        label: "Client Year Srog",
        content: derive.yearSrog(dateOfBirth, cache),
      },
      { label: "Client Year Lue", content: derive.yearLue(dateOfBirth, cache) },
      {
        label: "Client Year Wang",
        content: derive.yearWang(dateOfBirth, cache),
      },
      {
        label: "Client Year Lung",
        content: derive.yearLung(dateOfBirth, cache),
      },
      { label: "Date Year Sign", content: derive.year(calcDate, cache) },
      { label: "Date Year Srog", content: derive.yearSrog(calcDate, cache) },
      { label: "Date Year Lue", content: derive.yearLue(calcDate, cache) },
      { label: "Date Year Wang", content: derive.yearWang(calcDate, cache) },
      { label: "Date Year Lung", content: derive.yearLung(calcDate, cache) },
      {
        label: "Year Srog Relationship",
        content: derive.srogRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "Year Lue Relationship",
        content: derive.lueRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "Year Wang Relationship",
        content: derive.wangRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "Year Lung Relationship",
        content: derive.lungRelationship([dateOfBirth, calcDate], cache),
      }
    );

    sectionFour.push(
      { label: "Client Month Sign", content: derive.month(dateOfBirth, cache) },
      {
        label: "Client Month Srog",
        content: derive.monthLifeForce(dateOfBirth, cache),
      },
      {
        label: "Client Month Lue",
        content: derive.monthBody(dateOfBirth, cache),
      },
      {
        label: "Client Month Wang",
        content: derive.monthPower(dateOfBirth, cache),
      },
      {
        label: "Client Month Lung",
        content: derive.monthLuck(dateOfBirth, cache),
      },
      { label: "Date Month Sign", content: derive.month(calcDate, cache) },
      {
        label: "Date Month Srog",
        content: derive.monthLifeForce(calcDate, cache),
      },
      { label: "Date Month Lue", content: derive.monthBody(calcDate, cache) },
      { label: "Date Month Wang", content: derive.monthPower(calcDate, cache) },
      { label: "Date Month Lung", content: derive.monthLuck(calcDate, cache) },
      {
        label: "Month Srog Relationship",
        content: derive.monthSrogRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "Month Lue Relationship",
        content: derive.monthLueRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "Month Wang Relationship",
        content: derive.monthWangRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "Month Lung Relationship",
        content: derive.monthLungRelationship([dateOfBirth, calcDate], cache),
      }
    );

    sectionFive.push(
      { label: "Client Day Sign", content: derive.day(dateOfBirth, cache) },
      {
        label: "Client Day Srog",
        content: derive.dayLifeForce(dateOfBirth, cache),
      },
      {
        label: "Client Day Lue",
        content: derive.dayBody(dateOfBirth, cache),
      },
      {
        label: "Client Day Wang",
        content: derive.dayPower(dateOfBirth, cache),
      },
      {
        label: "Client Day Lung",
        content: derive.dayLuck(dateOfBirth, cache),
      },
      { label: "Date Day Sign", content: derive.day(calcDate, cache) },
      {
        label: "Date Day Srog",
        content: derive.dayLifeForce(calcDate, cache),
      },
      { label: "Date Day Lue", content: derive.dayBody(calcDate, cache) },
      { label: "Date Day Wang", content: derive.dayPower(calcDate, cache) },
      { label: "Date Day Lung", content: derive.dayLuck(calcDate, cache) },
      {
        label: "Day Srog Relationship",
        content: derive.daySrogRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "Day Lue Relationship",
        content: derive.dayLueRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "Day Wang Relationship",
        content: derive.dayWangRelationship([dateOfBirth, calcDate], cache),
      },
      {
        label: "Day Lung Relationship",
        content: derive.dayLungRelationship([dateOfBirth, calcDate], cache),
      }
    );

    sectionSix.push(
      {
        label: "Client Hour Sign",
        content: derive.hour([timeOfBirth, dateOfBirth], cache),
      },
      {
        label: "Client Hour Srog",
        content: derive.hourLifeForce([timeOfBirth, dateOfBirth], cache),
      },
      {
        label: "Client Hour Lue",
        content: derive.hourBody([timeOfBirth, dateOfBirth], cache),
      },
      {
        label: "Client Hour Wang",
        content: derive.hourPower([timeOfBirth, dateOfBirth], cache),
      },
      {
        label: "Client Hour Lung",
        content: derive.hourLuck([timeOfBirth, dateOfBirth], cache),
      },
      {
        label: "Date Hour Sign",
        content: derive.hour([calcTime, calcDate], cache),
      },
      {
        label: "Date Hour Srog",
        content: derive.hourLifeForce([calcTime, calcDate], cache),
      },
      {
        label: "Date Hour Lue",
        content: derive.hourBody([calcTime, calcDate], cache),
      },
      {
        label: "Date Hour Wang",
        content: derive.hourPower([calcTime, calcDate], cache),
      },
      {
        label: "Date Hour Lung",
        content: derive.hourLuck([calcTime, calcDate], cache),
      },
      {
        label: "Hour Srog Relationship",
        content: derive.hourSrogRelationship(
          [timeOfBirth, dateOfBirth],
          [calcTime, calcDate],
          cache
        ),
      },
      {
        label: "Hour Lue Relationship",
        content: derive.hourLueRelationship(
          [timeOfBirth, dateOfBirth],
          [calcTime, calcDate],
          cache
        ),
      },
      {
        label: "Hour Wang Relationship",
        content: derive.hourWangRelationship(
          [timeOfBirth, dateOfBirth],
          [calcTime, calcDate],
          cache
        ),
      },
      {
        label: "Hour Lung Relationship",
        content: derive.hourLungRelationship(
          [timeOfBirth, dateOfBirth],
          [calcTime, calcDate],
          cache
        ),
      }
    );

    sectionSeven.push(
      {
        label: "Client Day Mewa",
        content: derive.dayMewa(dateOfBirth, cache),
      },
      {
        label: "Client Day Parkha",
        content: derive.dayParkha(dateOfBirth, cache),
      },
      {
        label: "Date Day Mewa",
        content: derive.dayMewa(calcDate, cache),
      },
      {
        label: "Date Day Parkha",
        content: derive.dayParkha(calcDate, cache),
      }
    );

    sectionEight.push(
      { label: "Best Day", content: derive.bestDay(dateOfBirth, cache) },
      { label: "Good Day", content: derive.goodDay(dateOfBirth, cache) },
      { label: "Worst Day", content: derive.worstDay(dateOfBirth, cache) }
    );
    sectionNine.push(
      { label: "Basis", content: derive.basis(dateOfBirth, cache) },
      { label: "Power", content: derive.power(dateOfBirth, cache) },
      { label: "Success", content: derive.success(dateOfBirth, cache) },
      { label: "Obstacle", content: derive.obstacle(dateOfBirth, cache) },
      { label: "Disturbance", content: derive.disturbance(dateOfBirth, cache) },
      { label: "Enemy", content: derive.enemy(dateOfBirth, cache) }
    );
    sectionTen.push(
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
    report.push(sectionSix);
    report.push(sectionSeven);
    report.push(sectionEight);
    report.push(sectionNine);
    report.push(sectionTen);

    return report;
  }
}
