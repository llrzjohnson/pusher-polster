const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Set public folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, err => {
  if (err) throw err;
  console.log("Connected on PORT 3000");
});
