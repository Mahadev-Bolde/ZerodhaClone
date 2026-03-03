require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./Model/HoldingsModel");
const { PositionsModel } = require("./Model/PositionsModel");
const { OrdersModel } = require("./Model/OrdersModel");

// Routes
const authRoute = require("./Routes/AuthRoute");

const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

/* ✅ FIXED CORS (ONLY CHANGE MADE) */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://zerodha-clone-vbg9.vercel.app",
      "https://zerodha-clone-ruddy-zeta.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// Explicitly allow preflight requests
app.options("*", cors());

// Get All Holdings
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

// Get All Positions
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// Get order
app.post("/newOrder", async (req, res) => {
  let newOrder = await new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.send(newOrder);
});

app.use("/", authRoute);

app.listen(PORT, () => {
  console.log(`App Started on port ${PORT}`);
  mongoose.connect(uri);
  console.log("DB Connected Successfully!");
});
