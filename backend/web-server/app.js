const express = require("express");
const helmet = require("helmet");
var cors = require("cors");
const router = require("./controller");

module.exports = () => {
  const app = express();

  // TODO: adding here security midddlewares
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use("/", router());

  // 404 errors
  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    err.name = "Not Found";
    next(err);
  });

  // Central Error handling
  app.use((err, req, res, _next) => {
    // TODO: log errors here with logger instance
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err.name,
    });
  });

  return app;
};
