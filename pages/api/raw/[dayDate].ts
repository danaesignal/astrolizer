// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { rawRecord } from "../../../shared/json/interfaces";
import {
  rawRecord as recordLookup,
  recordRequest,
  lookupError,
} from "../../../shared/tools/getRecord/rawRecord";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { dayDate } = req.query;

  if (typeof dayDate === "string") {
    const rawRequest: recordRequest = {
      key: dayDate,
      range: "dayDate",
    };

    const record: rawRecord | lookupError = recordLookup(rawRequest);

    res.send(record);
  }
}
