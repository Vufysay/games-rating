const { PATH_TO_RATING_FILE } = require("./config");
const { WEIGHT } = require("./config");
const makeRatingFile = require("./rating-file");
const { createRating, updateRating } = require("./calculations");

module.exports = {
  makeRatingFile,
  PATH_TO_RATING_FILE,
  createRating,
  updateRating,
  WEIGHT,
};
