const express = require("express");
require("dotenv").config();
require("./config/db").connectDB();
const cors = require("cors");
const { foodRouter } = require("./routes/foodRoute");
const { userRouter } = require("./routes/userRoute");
const { cartRouter } = require("./routes/cartRoute");
const { orderRouter } = require("./routes/orderRoute");

// app config

const app = express();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

//api working

app.get("/", (req, res) => {
  res.send("Api Working");
});

//api endpoints

app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter);
app.use("/images", express.static("uploads"));

app.listen(PORT, () => {
  console.log(`Server startted on http://localhost:${PORT}`);
});
