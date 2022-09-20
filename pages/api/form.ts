// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ObsApp, ObsAppRequest } from "../../shared/tools/buildReport/obsApp";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    dateOfBirth,
    motherYearOfBirth,
    timeOfBirth,
    calcDate,
    calcTime,
    gender,
  } = req.body;

  const reportRequest: ObsAppRequest = {
    dateOfBirth,
    motherYearOfBirth,
    timeOfBirth,
    calcDate,
    calcTime,
    gender,
  };

  const report = new ObsApp(reportRequest);
  const reportJSON = report.generateReport();

  res.status(200).send(reportJSON);
}
