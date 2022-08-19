// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  DayCalc,
  DayCalcRequest,
} from "../../shared/tools/buildReport/dayCalc";

const reportRequest: DayCalcRequest = {
  dateOfBirth: 19841108,
  motherYearOfBirth: 1955,
  timeOfBirth: 2000,
  calcDate: 20220617,
  calcTime: 2000,
};

const report = new DayCalc(reportRequest);
const reportJSON = report.generateReport();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send(reportJSON);
}
