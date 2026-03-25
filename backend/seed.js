require("dotenv").config();
const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");

const uri = process.env.MONGO_URL;

mongoose.connect(uri).then(async () => {
  console.log("Connected to MongoDB. Seeding...");
  
  // Wipe current states
  await HoldingsModel.deleteMany({});
  
  // Insert initial dummy Holdings
  await HoldingsModel.insertMany([
    {
      name: "RELIANCE",
      qty: 15,
      avg: 2193.7,
      price: 2112.4,
      net: "-3.71%",
      day: "+1.44%",
    },
    {
      name: "TCS",
      qty: 5,
      avg: 3041.7,
      price: 3194.8,
      net: "+5.03%",
      day: "-0.25%",
    },
    {
      name: "HDFCBANK",
      qty: 20,
      avg: 1383.4,
      price: 1522.35,
      net: "+10.04%",
      day: "+0.11%",
    }
  ]);

  // Wipe current Positions
  await PositionsModel.deleteMany({});
  
  // Insert initial dummy Positions
  await PositionsModel.insertMany([
    {
      product: "CNC",
      name: "INFY",
      qty: 10,
      avg: 1350.5,
      price: 1555.45,
      net: "+15.18%",
      day: "-1.60%",
      isLoss: false,
    },
    {
      product: "CNC",
      name: "SBIN",
      qty: 25,
      avg: 324.35,
      price: 430.2,
      net: "+32.63%",
      day: "-0.34%",
      isLoss: true,
    }
  ]);
  
  console.log("Successfully seeded dummy holdings & positions into the remote MongoDB Database!");
  process.exit(0);
});
