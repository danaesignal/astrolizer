import { fstat, readFile, writeFile } from "fs";
import { searchRequest, upsertRequest } from "../interfaces/";
export class Dataset<T extends { [key: string]: string }> {
  constructor(private filename: string) {}

  private path = `./db/json/${this.filename}`;

  private read(): Promise<T[]> {
    return new Promise((resolve, reject) => {
      readFile(this.path, "utf8", (err, data) => {
        if (err) return reject(err);
        const db = JSON.parse(data);
        return resolve(db);
      });
    });
  }

  private write(data: T[]): Promise<boolean> {
    return new Promise((resolve, reject) => {
      writeFile(this.path, JSON.stringify(data), (err) => {
        if (err) return reject(false);
        return resolve(true);
      });
    });
  }

  async search(
    request: searchRequest,
    providedData?: T[]
  ): Promise<T | undefined> {
    const data = providedData ? providedData : await this.read();

    const result: T | undefined = data.find((record: T) => {
      return record[request.range] === request.query;
    });

    return result;
  }

  async offsetSearch(
    request: searchRequest,
    offset: number
  ): Promise<T | undefined> {
    const data = await this.read();
    let result: T | undefined;

    const initialResult: T | undefined = await this.search(request);

    if (initialResult) {
      const index = data.indexOf(initialResult);
      let offsetIndex = offset + index;

      while (offsetIndex >= data.length) {
        offsetIndex = offsetIndex - data.length;
      }

      while (offsetIndex < 0) {
        offsetIndex = offsetIndex + data.length;
      }

      result = data[offsetIndex];
    }

    return result;
  }

  async findAll(): Promise<T[] | undefined> {
    return this.read().then((data) => data);
  }

  async upsert(request: upsertRequest<T>): Promise<boolean> {
    const position = request.position;
    const data = await this.read();
    const newRecord = request.record;

    if (position === undefined) {
      data.push(newRecord);
    } else {
      if (typeof position === "number") {
        data[position] = newRecord;
      } else {
        const oldRecord = await this.search({ ...position }, data);
        if (oldRecord) {
          const index = data.indexOf(oldRecord);
          data[index] = newRecord;
        } else {
          data.push(newRecord);
        }
      }
    }

    return await this.write(data);
  }
}
