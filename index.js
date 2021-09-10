require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5050;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const connectDB = require("./src/user/data-access/mongoDB/connection");
const userRouter = require("./src/user/controllers");

app.use(cors());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connectDB();

app.use(userRouter);
app.listen(PORT, () => {
  console.log(`Application listening on port - ${PORT}`);
});
