const express = require("express");
const { default: mongoose } = require("mongoose");
const Disorder = require("../model/disorder");
const Question = require("../model/question");
const DisorderDetail = require("../model/disorderDetail.js");

const app = express();

app.get("/all", async (req, res) => {
  try {
    const disorders = await Disorder.find({});
    return res.status(200).send(disorders);
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.post("/get", async (req, res) => {
  try {
    const { questionIds } = req.body;

    let question_ids_array = questionIds.map((id) =>
      mongoose.Types.ObjectId(id)
    );

    const questions = await Question.find({
      _id: { $in: question_ids_array },
    });

    const disorder_ids = questions
      .map((question) => question.d_id)
      .reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
      }, {});

    let d_id = Object.keys(disorder_ids).sort(function (a, b) {
      return disorder_ids[b] - disorder_ids[a];
    });

    if (d_id.length > 3) d_id.splice(3);

    let result_disorders = await Disorder.find({ _id: { $in: d_id } });

    return res.status(200).send(result_disorders);
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.get("/info/:disorder_id", async (req, res) => {
  try {
    const disorder_id = req.params.disorder_id;

    if (!disorder_id) res.status(200).send([]);

    const details = await DisorderDetail.find({
      d_id: disorder_id,
    });

    return res.status(200).send(details);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = app;
