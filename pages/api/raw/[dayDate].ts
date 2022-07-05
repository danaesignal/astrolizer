// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  rawRecord,
  searchError,
  searchRequest,
} from "../../../shared/interfaces";
import { dates as data } from "../../../shared/data/dates";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { dayDate } = req.query;

  if (typeof dayDate === "string") {
    const request: searchRequest = {
      query: dayDate,
      range: "dayDate",
    };

    const record: rawRecord | searchError = data.search(request);

    if (record) {
      res.send(record);
    } else {
      res.status(404).send("Not found");
    }
  }
}
