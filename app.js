const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Set public folder
app.use(express.static(path.join(__dirname, "public")));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS
app.use(cors());

const port = 3000;

app.listen(port, err => {
  if (err) throw err;
  console.log("Connected on PORT 3000");
});
