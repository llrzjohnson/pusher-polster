const express = require("express");
const router = express.Router();

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
  res.send("POLL");
});

router.post("/", (req, res) => {
  pusher.trigger("os-poll", "os-vote", {
    points: 1,
    os: req.body.os
  });
  return res.json({ success: true, message: "Thank you for voting" });
});

module.exports = router;
