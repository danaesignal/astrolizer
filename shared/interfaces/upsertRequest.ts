export type upsertRequest<T> = {
  query: string;
  range: string;
  record: T;
};
