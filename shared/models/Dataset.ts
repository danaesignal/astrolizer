import { searchRequest, searchError } from "../interfaces/";
export class Dataset<T extends { [key: string]: string }> {
  constructor(private data: T[]) {}

  search(request: searchRequest): T | searchError {
    const preparedError: searchError = {
      errorMessage: "Record not found. Please check request.",
      request,
    };
    const result: T | undefined = this.dataset.find((record: T) => {
      return record[request.range] === request.query;
    });

    if (result) {
      return result;
    } else {
      return preparedError;
    }
  }

  get dataset(): T[] {
    return this.data;
  }
}
