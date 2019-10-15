const quoteArr = [
  "Sweet! What about mine?",
  "Hello there",
  "All you need is love",
  "King Kong aint got nothing on me",
  "I am the senate!",
  "I am the one who knocks",
  "Whether youre a quarter mile away or halfway across the world, you'll always be with me and you'll always be my brother.",
  "You're breathtaking",
  "Part of the crew, part of the ship",
  "I am Groot"
];
const express = require("express");
const app = express();
const port = 3000;

//app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.post("/", function(req, res) {
  res.send(quoteArr[Math.floor(Math.random() * 10)]);
});
