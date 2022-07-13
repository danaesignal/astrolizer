// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ObsApp, ObsAppRequest } from "../../shared/tools/buildReport/obsApp";

const reportRequest: ObsAppRequest = {
  calcDate: 20220708,
  dateOfBirth: 19841108,
  gender: "male",
  motherYearOfBirth: 1955,
  timeOfBirth: 1700,
};

const report = new ObsApp(reportRequest);
const reportJSON = report.buildReport();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send(reportJSON);
}
