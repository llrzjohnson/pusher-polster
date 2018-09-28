const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//Retrieve Vote model

const Vote = require("../models/Vote");

//Pusher Setup
const Pusher = require("pusher");

let pusher = new Pusher({
  appId: "609859",
  key: "da78699db069dc034f2b",
  secret: "124d9a10d156295f374a",
  cluster: "us2",
  encrypted: true
});

router.get("/", (req, res) => {
  Vote.find().then(votes => res.json({ success: true, votes: votes }));
});

router.post("/", (req, res) => {
  const newVote = {
    os: req.body.os,
    points: 1
  };

  new Vote(newVote).save().then(vote => {
    pusher.trigger("os-poll", "os-vote", {
      points: parseInt(vote.points),
      os: vote.os
    });
  });

  return res.json({ success: true, message: "Thank you for voting" });
});

module.exports = router;
