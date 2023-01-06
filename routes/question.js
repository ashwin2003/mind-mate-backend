const express = require("express");
const Question = require("../model/question");

const app = express();

app.get("", async (req, res) => {
  try {
    const questions = await Question.find({});
    return res.status(200).send(questions);
  } catch (error) {
    return res.status(500);
  }
});

module.exports = app;
