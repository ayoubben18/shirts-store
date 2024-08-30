import pino from "pino";
import { ServerEnv } from "./env-server";

const transport = pino.transport({
  targets: [
    {
      target: "pino-pretty",
    },
    {
      target: "@logtail/pino",
      options: { sourceToken: ServerEnv.LOGTAIL_SOURCE_TOKEN },
    },
  ],
});

const logger = pino(transport);

export default logger;
