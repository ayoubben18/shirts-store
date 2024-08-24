import { Client } from "@upstash/qstash";
import { ServerEnv } from "./env-server";

export const qstash = new Client({
  token: ServerEnv.QSTASH_TOKEN,
});
