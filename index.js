var express = require("express");
var app = express();
var cors = require("cors");
const wrapAsync = require("./functions/wrapAsync");
const { InitialPath } = require("./controller/Products");
var port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", wrapAsync(InitialPath));

app.listen(port, () => {
  console.log("listening on port " + port);
});
