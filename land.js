const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Routing on the /lands
                this is actully find operation`);
});

router.get("/count", (req, res) => {
  res.send(`Routing on the /lands/count
      not quite sure about its mechanism`);
});

router.get("/:id", (req, res) => {
  res.send(`findone method basically with the id ${req.params.id}`);
});

module.exports = router;
