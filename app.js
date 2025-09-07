const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello world bitches on AWS App Runner!" });
});

app.get("/health", (req, res) => res.status(200).send("OK"));

app.listen(port, () => console.log(`Server running on ${port}`));