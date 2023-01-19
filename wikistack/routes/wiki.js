const express = require("express");
const { Page } = require("../models");
const router = express.Router();
const { addPage } = require("../views/");
const Sequelize = require("sequelize");
router.get("/", (req, res, next) => {
  res.send("we are at GET /wiki/");
});

router.post("/", async (req, res, next) => {
  try {
    const page = await Page.create({
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      content: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "This is the default content. very, very boring.",
      },
    });
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
