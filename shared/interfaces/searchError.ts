import { searchRequest } from "./searchRequest";

export type searchError = {
  errorMessage: string;
  request: searchRequest;
};
