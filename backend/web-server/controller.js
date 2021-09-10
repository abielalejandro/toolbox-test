const express = require("express");

const reverseEchoUseCases = require("../use-cases/reverseEchoUseCases");

module.exports = () => {
  const router = express.Router();

  router.get("/iecho", async (req, res, next) => {
    try {
      const body = {
        text: req.query.text || null,
      };

      const result = reverseEchoUseCases.reverseEcho(body);
      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  });

  return router;
};
