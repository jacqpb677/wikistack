const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 3000;
const path = require("path");
// lets us create a path for static.
// If you're using xp.static, you'll need Path.
const layout = require("./views/layout");

const { db } = require("./models");
db.authenticate().then(() => {
  console.log("Database connection is good!");
});

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "stylesheets")));
app.use(
  // "parses the request body"
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res, next) => {
  res.send(layout("Hello there."));
});

app.listen(port, () => {
  console.log("Listening on 3000!");
});
