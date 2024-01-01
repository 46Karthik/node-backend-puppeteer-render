const express = require("express");
const { scrapeLogic } = require("./scrapeLogic");
const { songscrape } = require("./songscrape");
const bodyParser = require('body-parser');
const app = express();


const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
app.get("/scrape", (req, res) => {
  scrapeLogic(res);
});

app.post("/song", (req, res) => {
  songscrape(req, res);
});
app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
