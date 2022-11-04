import { searchRequest, upsertRequest } from "../interfaces/";
export class Dataset<T extends { [key: string]: string }> {
  constructor(private data: T[]) {}

  search(request: searchRequest): T | undefined {
    const result: T | undefined = this.data.find((record: T) => {
      return record[request.range] === request.query;
    });

    return result;
  }

  offsetSearch(request: searchRequest, offset: number): T | undefined {
    const initialResult: T | undefined = this.data.find((record: T) => {
      return record[request.range] === request.query;
    });
    let result: T | undefined;
    if (initialResult) {
      const index = this.data.indexOf(initialResult);
      let offsetIndex = offset + index;

      while (offsetIndex >= this.data.length) {
        offsetIndex = offsetIndex - this.data.length;
      }

      while (offsetIndex < 0) {
        offsetIndex = offsetIndex + this.data.length;
      }

      result = this.data[offsetIndex];
    }

    return result;
  }

  upsert(request: upsertRequest<T>): T | undefined {
    const { query, range, record } = request;
    return result;
  }
}
