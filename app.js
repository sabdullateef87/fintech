const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5050;
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`APPLICTION LISTENING ON PORT - ${PORT}`);
});
