require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
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

/* ===============================
   MIDDLEWARE
================================ */

// Parse JSON
app.use(express.json());
app.use(cookieParser());

// ✅ FIXED CORS (Works with Vercel + Render)
app.use(
  cors({
    origin: true, // allow all origins dynamically (safe for your case)
    credentials: true, // required for cookies
  })
);

/* ===============================
   ROUTES
================================ */

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// Get All Holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

// Get All Positions
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch positions" });
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
    res.json(newOrder);
  } catch (err) {
    res.status(500).json({ error: "Failed to create order" });
  }
});

// Auth routes (login/signup)
app.use("/", authRoute);

/* ===============================
   DATABASE CONNECTION + SERVER
================================ */

mongoose
  .connect(uri)
  .then(() => {
    console.log("DB Connected Successfully!");

    app.listen(PORT, () => {
      console.log(`App Started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB Connection Failed:", err);
  });
