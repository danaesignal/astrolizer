import { searchRequest } from "./searchRequest";

export type upsertRequest<T> = {
  record: T;
  position: number | searchRequest;
};
