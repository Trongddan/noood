const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const router = require("./routes/index");
const app = express();
dotEnv.config();
mongoose.connect(`${process.env.MONGODB_URL}`, () => console.log("connected"));
app.use(bodyParser.json({ limit: "50mb" }));

app.use(cors());
app.use(morgan("common"));
router(app);
// connect Database

app.listen(8000, () => console.log("sever is running"));
