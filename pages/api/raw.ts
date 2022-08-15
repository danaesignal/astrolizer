// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ObsApp, ObsAppRequest } from "../../shared/tools/buildReport/obsApp";

const reportRequest: ObsAppRequest = {
  calcDate: 20220708,
  dateOfBirth: 19841108,
  gender: "Male",
  motherYearOfBirth: 1955,
  timeOfBirth: 1700,
  calcTime: 1900,
};

const report = new ObsApp(reportRequest);
const reportJSON = report.generateReport();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send(reportJSON);
}
