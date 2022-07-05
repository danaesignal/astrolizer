// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Raw from "../../shared/data/json/raw.json";
import * as interfaces from "../../shared/interfaces";

const rawArray: interfaces.rawRecord[] = Raw as interfaces.rawRecord[];
const record: interfaces.rawRecord | undefined = rawArray.find((ele) => {
  return ele.dayDate === "19841108";
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (record) {
    res.status(200).send(record.yearCount);
  } else {
    res.status(404).send("Record not found.");
  }
}
