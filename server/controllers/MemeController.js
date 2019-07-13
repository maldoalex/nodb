const memes = require("./MemeLibrary");

const getMemes = (req, res) => {
  res.json(memes);
};

const addMeme = (req, res) => {
  const { name, image } = req.body;
  if (!name || !image) {
    return res.status(417).json("Name and image are required mofo!");
  }
  memes.push({ name, image: image });
  res.json(memes);
};

module.exports = {
  getMemes,
  addMeme
};
