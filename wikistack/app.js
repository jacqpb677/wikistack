const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 3000;
const path = require("path");
// lets us create a path for static.
// If you're using xp.static, you'll need Path.
const layout = require("./views/layout");
const { db, Page, User } = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/users");

app.use("/wiki", wikiRouter);
app.use("/users", userRouter);

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
  res.redirect("/wiki");
});

const init = async () => {
  //   await Page.sync();
  //   await User.sync();
  // after we AWAIT the "results" of Page.sync and User.sync, THEN we listen on the port....
  // OR, we could just do this. Instead of awaiting pAGE, and User, and all that stuff piecemeal...
  // just do it in one shot!
  await db.sync();
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}. Here we go.`);
  });
};

init();
