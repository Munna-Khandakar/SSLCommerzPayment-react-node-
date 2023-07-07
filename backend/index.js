// necessary pacakges
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3030;

// forwarding the request to the payment routes
app.use("/api/payment", require("./routes/paymentRoutes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
