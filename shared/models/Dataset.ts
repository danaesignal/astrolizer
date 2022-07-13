import { searchRequest } from "../interfaces/";
export class Dataset<T extends { [key: string]: string }> {
  constructor(private data: T[]) {}

  search(request: searchRequest): T | undefined {
    const result: T | undefined = this.data.find((record: T) => {
      return record[request.range] === request.query;
    });

    return result;
  }
}
