const express = require('express');
const app = express();
app.use(express.json());

const vehicles = [];
const garages = [];

app.post("/vehicle", function (req, res) {
    if (vehicles.length > 0 && vehicles.some((v) => v.carPlateNo === req.body.carPlateNo)) {
      res.status(409);
      return res.send("Vehicle already exist");
    }
    vehicles.push(req.body);
    res.json(req.body);
  });

app.get("/vehicle", function (req, res) {
    res.json(vehicles);
  });

app.put("/vehicle/:carPlateNo", function (req, res) {
    for (let v of vehicles) {
      if (v.carPlateNo === req.body.carPlateNo) {
        v.type = req.body.type
        res.status(200);
        return res.send("Update successful");
      }
    }
    res.status(404);
    res.send("Car plate number not found");
  });

app.post("/garage", function (req, res) {
    if (garages.length > 0 && garages.some((g) => g.garageNo === req.body.garageNo)) {
        res.status(200);
        return res.send("Success");
      }
    garages.push(req.body);
    res.json(req.body);
  });

app.get("/garage/:garageNo", function (req, res) {
    res.json(garages);
  });

  app.listen(3000, () => {
    console.log('Express intro running on localhost:3000');
  });