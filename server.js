const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// setup express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// setup routes
app.use("/users", require("./routes/userRoutes"));
app.use("/users", require("./routes/APIRoutes"));

// setup mongoose
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

// setup routes

app.use("/users", require("./routes/userRoutes"));
app.use("/users", require("./routes/APIRoutes"));

app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`));
