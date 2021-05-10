const express = require("express");
const buildingInfos = require("./buildingInfo");
const buildingTaxes = require("./buildingTax");
const buildings = require("./building");
const lands = require("./land");
const taxPayments = require("./taxPayment");
const zones = require("./zone");
const zoneWards = require("./zoneWard");

const app = express();
console.log(typeof app);
const port = 4500;

app.use("/building-infos", buildingInfos);
app.use("/building-taxes", buildingTaxes);
app.use("/buildings", buildings);
app.use("/lands", lands);
app.use("/tax-payments", taxPayments);
app.use("/zones", zones);
app.use("/zone-wards", zoneWards);

app.get("/", (req, res) => {
  res.send("Hello nodejs!");
});

app.listen(port, () => {
  console.log(`listening on the port of ${port}`);
});
