export class Dataset<T extends { [key: string]: string }> {
  private ranges: Array<keyof T>;
  constructor(private data: T[]) {
    this.ranges = Object.keys(data) as Array<keyof T>;
  }

  search(query: string, range: string): T | undefined {
    const result: T | undefined = this.data.find((record: T) => {
      return record[range] === query;
    });

    return result;
  }

  get validRanges(): Array<keyof T> {
    return this.ranges;
  }
}
