// import { rawRecord } from "../../json/interfaces";
import Raw from "../../json/raw.json";
import { rawRecord } from "../../json/interfaces";
export type rawRecordKey = keyof rawRecord;

export interface recordRequest {
  key: string;
  range: rawRecordKey;
}

export interface lookupError {
  errorMessage: string;
  request: recordRequest;
}

export function rawRecord(request: recordRequest) {
  const rawArray: rawRecord[] = Raw as rawRecord[];
  const record: rawRecord | undefined = rawArray.find((ele) => {
    return ele[request.range] === `${request.key}`;
  });

  if (record) {
    return record;
  } else {
    const errorObj: lookupError = {
      errorMessage: "No matching record found",
      request,
    };
    return errorObj;
  }
}
