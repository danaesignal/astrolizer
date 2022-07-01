// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Raw from "../../../shared/json/raw.json";
import * as interfaces from "../../../shared/json/interfaces";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { dayDate } = req.query;
  const rawArray: interfaces.rawRecord[] = Raw as interfaces.rawRecord[];
  if (dayDate) {
    const record: interfaces.rawRecord | undefined = rawArray.find((ele) => {
      return ele.dayDate === `${dayDate}`;
    });
    if (record) {
      res.status(200).json(record);
    } else {
      res.status(404).json({ error: "Record not found." });
    }
  } else {
    res.status(404).json({ error: "Record not found." });
  }
}
