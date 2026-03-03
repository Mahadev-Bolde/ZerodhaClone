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

/* ✅ CORS ENABLED FOR ALL ORIGINS */
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Handle preflight requests explicitly
app.options("*", cors());

// Get All Holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching holdings" });
  }
});

// Get All Positions
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching positions" });
  }
});

// Create New Order
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Error creating order" });
  }
});

// Auth Routes
app.use("/", authRoute);

// Start Server
app.listen(PORT, async () => {
  console.log(`App Started on port ${PORT}`);

  try {
    await mongoose.connect(uri);
    console.log("DB Connected Successfully!");
  } catch (error) {
    console.log("DB Connection Failed:", error.message);
  }
});
