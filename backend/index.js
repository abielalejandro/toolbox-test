const initServer = require("./web-server/server");

require("dotenv").config();

async function main() {
  initServer();
}

main().catch((error) => {
  logger.error(`App error: ${error.stack}`);
  process.exit(1);
});

process.on("uncaughtException", (error) => {
  logger.error(`uncaughtException: ${error.stack}`);
  process.exit(1);
});

process.on("unhandledRejection", (reason, _promise) => {
  logger.error(`unhandledRejection: ${reason}`);
  process.exit(1);
});
