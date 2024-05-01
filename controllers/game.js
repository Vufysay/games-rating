const fs = require("fs");
const { getRandomGame } = require("../appModules/api");

function gameRouteController(res) {
  fs.readFile("./dataset/rating.json", (err, ratingFile) => {
    if (err) {
      res.statusCode = 500;
      res.end("Internal server error");
    }
    const data = JSON.parse(ratingFile);
    const game = getRandomGame(data);
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(game));
  });
}
module.exports = gameRouteController;
