const fs = require("fs").promises;

async function makeRatingFile(path, array) {
  fs.readFile(path, "utf-8", (err, ratingFile) => {
    let hasNewGames = false;
    if (err) {
      console.log(err);
      return;
    }

    const ratingArray = JSON.parse(ratingFile);

    array.forEach((item) => {
      if (!ratingArray.find((el) => el.id === item.id)) {
        let obj = {
          id: item.id,
          title: item.title,
          image: item.image,
          link: item.link,
          description: item.description,
          rating: 0,
        };

        ratingArray.push(obj);
      }
    });

    if (hasNewGames) {
      fs.writeFile(path, JSON.stringify(ratingFile), () => {
        console.log("Файл записан!");
      });
    }
  });
}

module.exports = makeRatingFile;
