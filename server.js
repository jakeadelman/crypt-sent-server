import { getTweets } from "./functions/fetchTweets";
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", function(req, res) {
  res.send("hello world");
});

app.get("/:term", (req, res) => {
  console.log(req.params.term);
  let term = req.params.term;
  getTweets(term).then(r => {
    res.send(r);
  });
});

app.listen(4005, () => {
  console.log("listening on port 4005");
});
