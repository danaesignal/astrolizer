import * as data from "../../../db/definitions";
import { cache, kyePar } from ".";

export async function kyeParkha(key: string, cache: cache): Promise<string> {
  return kyePar(key, cache);
}
