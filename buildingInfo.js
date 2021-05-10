const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Routing on the /building-infos
            all building information would be provided
            this is actully find operation`);
});

router.get("/count", (req, res) => {
  res.send(`Routing on the /building-infos/count
  not quite sure about its mechanism`);
});
module.exports = router;
